import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, FormSubmission } from '../lib/supabase';
import { Download, Eye, Filter, Search, Calendar, User, Mail, Phone, MapPin, MessageSquare, Lock, RefreshCw, X, Trash2 } from 'lucide-react';

const Admin = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'hero' | 'contact'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [submissionToDelete, setSubmissionToDelete] = useState<FormSubmission | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const authStatus = sessionStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchSubmissions();
    } else {
      // Redirect to home page if not authenticated
      navigate('/');
    }
  }, [navigate]);

  // Test Supabase connection
  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('Testing Supabase connection...');
        const { data, error } = await supabase
          .from('infinitespa_all_leads')
          .select('count', { count: 'exact' });
        
        console.log('Connection test result:', { data, error });
      } catch (err) {
        console.error('Connection test failed:', err);
      }
    };
    
    testConnection();
  }, []);

  // Helper function to map database format to FormSubmission format
  const mapDatabaseToFormSubmission = (dbRow: any): FormSubmission => {
    // Extract form_type from "Additional info" field
    let formType: 'hero' | 'contact' = 'contact';
    const additionalInfo = dbRow['Additional info'] || '';
    if (additionalInfo.includes('Form Type: Hero')) {
      formType = 'hero';
    } else if (additionalInfo.includes('Form Type: Dealer')) {
      formType = 'contact'; // Map dealer to contact for display
    } else if (additionalInfo.includes('Form Type: Booking')) {
      formType = 'contact'; // Map booking to contact for display
    }

    return {
      id: dbRow.id?.toString() || '',
      form_type: formType,
      name: dbRow.Name || '',
      email: dbRow.Email || '',
      phone: dbRow.Phone || '',
      location: additionalInfo.includes('Location:') 
        ? additionalInfo.match(/Location:\s*([^\n]+)/)?.[1]?.trim() || ''
        : '',
      project_description: additionalInfo || '',
      created_at: dbRow.Added || dbRow.Added?.toString() || ''
    };
  };

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      console.log('Fetching submissions from Supabase...');
      
      // Query the correct table with correct column names
      const { data, error } = await supabase
        .from('infinitespa_all_leads')
        .select('*')
        .order('Added', { ascending: false });

      console.log('Supabase response:', { data, error, dataLength: data?.length });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Map database rows to FormSubmission format
      const mappedSubmissions = (data || []).map(mapDatabaseToFormSubmission);
      
      console.log('Submissions loaded:', mappedSubmissions.length);
      setSubmissions(mappedSubmissions);
    } catch (error: any) {
      console.error('Error fetching submissions:', error);
      setError(`Failed to load submissions: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = 
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (submission.phone && submission.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (submission.location && submission.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (submission.project_description && submission.project_description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = filterType === 'all' || submission.form_type === filterType;

    return matchesSearch && matchesFilter;
  });

  const sortedSubmissions = [...filteredSubmissions].sort((a, b) => {
    if (!a.created_at || !b.created_at) return 0;
    return sortBy === 'newest' 
      ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      : new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  });

  const exportToCSV = () => {
    const csvContent = [
      ['Form Type', 'Name', 'Email', 'Phone', 'Location', 'Project Description', 'Created At'],
      ...sortedSubmissions.map(sub => [
        sub.form_type,
        sub.name,
        sub.email,
        sub.phone || '',
        sub.location || '',
        sub.project_description || '',
        sub.created_at ? new Date(sub.created_at).toLocaleString() : ''
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `form-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getFormTypeColor = (type: string) => {
    return type === 'hero' ? 'bg-[#0b1c26] bg-opacity-10 text-[#0b1c26]' : 'bg-[#0b1c26] bg-opacity-20 text-[#0b1c26]';
  };

  const getFormTypeLabel = (type: string) => {
    return type === 'hero' ? 'Hero Form' : 'Contact Form';
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    navigate('/');
  };

  const handleLeadClick = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setShowLeadModal(true);
  };

  const closeLeadModal = () => {
    setSelectedSubmission(null);
    setShowLeadModal(false);
  };

  const handleDeleteClick = (submission: FormSubmission, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent row click
    setSubmissionToDelete(submission);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (!submissionToDelete) return;

    try {
      setDeletingId(submissionToDelete.id);
      console.log('🗑️ Attempting to delete submission:', submissionToDelete.id);
      console.log('📊 Submission details:', submissionToDelete);

      // First, let's check if we can read the submission
      const { data: checkData, error: checkError } = await supabase
        .from('infinitespa_all_leads')
        .select('*')
        .eq('id', submissionToDelete.id)
        .single();

      console.log('🔍 Check submission exists:', { checkData, checkError });

      if (checkError) {
        console.error('❌ Error checking submission:', checkError);
        throw new Error(`Cannot access submission: ${checkError.message}`);
      }

      // Now try to delete
      const { data: deleteData, error: deleteError } = await supabase
        .from('infinitespa_all_leads')
        .delete()
        .eq('id', submissionToDelete.id)
        .select();

      console.log('🗑️ Delete result:', { deleteData, deleteError });

      if (deleteError) {
        console.error('❌ Delete error:', deleteError);
        console.error('❌ Error details:', {
          message: deleteError.message,
          details: deleteError.details,
          hint: deleteError.hint,
          code: deleteError.code
        });
        throw new Error(`Delete failed: ${deleteError.message}`);
      }

      console.log('✅ Submission deleted successfully from Supabase');
      console.log('📊 Deleted data:', deleteData);
      
      // Remove from local state
      setSubmissions(prev => prev.filter(sub => sub.id !== submissionToDelete.id));
      
      // Close modal
      setShowDeleteConfirm(false);
      setSubmissionToDelete(null);
      
      // Clear any previous errors
      setError('');
      
    } catch (error) {
      console.error('❌ Error deleting submission:', error);
      setError(`Failed to delete submission: ${error.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setSubmissionToDelete(null);
  };

  // Test Supabase permissions
  const testSupabasePermissions = async () => {
    try {
      console.log('🧪 Testing Supabase permissions...');
      
      // Test read permission
      const { data: readData, error: readError } = await supabase
        .from('infinitespa_all_leads')
        .select('*')
        .limit(1);
      
      console.log('📖 Read test:', { readData, readError });
      
      // Test insert permission (we won't actually insert)
      const testSubmission = {
        form_type: 'test' as const,
        name: 'Test User',
        email: 'test@example.com',
        phone: '123-456-7890'
      };
      
      console.log('📝 Insert test data:', testSubmission);
      
      // Test delete permission by trying to delete a non-existent record
      const { data: deleteData, error: deleteError } = await supabase
        .from('infinitespa_all_leads')
        .delete()
        .eq('id', '00000000-0000-0000-0000-000000000000')
        .select();
      
      console.log('🗑️ Delete test (non-existent):', { deleteData, deleteError });
      
      // Check RLS policies
      const { data: policies, error: policiesError } = await supabase
        .rpc('get_table_policies', { table_name: 'infinitespa_all_leads' });
      
      console.log('🔒 RLS Policies:', { policies, policiesError });
      
    } catch (error) {
      console.error('❌ Permission test failed:', error);
    }
  };

  // Make test function available globally
  (window as any).testSupabasePermissions = testSupabasePermissions;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Access denied. Redirecting...</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff' }}>
      {/* Header */}
      <div className="border-b border-gray-200 pt-20" style={{ backgroundColor: '#0b1c26' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-2xl lg:text-3xl font-medium text-white leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>Form Submissions</h1>
              <p className="text-white/70 mt-2 text-sm lg:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>Manage and view all form submissions</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={exportToCSV}
                className="bg-white text-[#0b1c26] px-4 lg:px-6 py-2 lg:py-3 hover:bg-white/90 transition-colors flex items-center justify-center space-x-2 text-sm lg:text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export CSV</span>
                <span className="sm:hidden">Export</span>
              </button>
              <button
                onClick={fetchSubmissions}
                className="bg-white bg-opacity-20 text-white border border-white border-opacity-30 px-4 lg:px-6 py-2 lg:py-3 hover:bg-opacity-30 transition-colors flex items-center justify-center space-x-2 text-sm lg:text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-white bg-opacity-20 text-white border border-white border-opacity-30 px-4 lg:px-6 py-2 lg:py-3 hover:bg-opacity-30 transition-colors flex items-center justify-center space-x-2 text-sm lg:text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Lock className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-[#0b1c26] bg-opacity-10">
                <User className="w-6 h-6 text-[#0b1c26]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Total Submissions</p>
                <p className="text-2xl font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>{submissions.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-[#0b1c26] bg-opacity-10">
                <Eye className="w-6 h-6 text-[#0b1c26]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Hero Forms</p>
                <p className="text-2xl font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {submissions.filter(s => s.form_type === 'hero').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-[#0b1c26] bg-opacity-10">
                <Mail className="w-6 h-6 text-[#0b1c26]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Contact Forms</p>
                <p className="text-2xl font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {submissions.filter(s => s.form_type === 'contact').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 mb-6 p-4 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div>
              <label className="block text-sm font-medium text-[#0d0c09] mb-2 lg:mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search submissions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 lg:py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent text-sm lg:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0d0c09] mb-2 lg:mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Filter by Form Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as 'all' | 'hero' | 'contact')}
                className="w-full px-3 py-2 lg:py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent text-sm lg:text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <option value="all">All Forms</option>
                <option value="hero">Hero Form</option>
                <option value="contact">Contact Form</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0d0c09] mb-2 lg:mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Sort by Date</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
                className="w-full px-3 py-2 lg:py-3 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent text-sm lg:text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submissions List */}
        <div className="bg-white border border-gray-200">
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400">
              <p className="text-red-700" style={{ fontFamily: 'Inter, sans-serif' }}>{error}</p>
            </div>
          )}
          
          {sortedSubmissions.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <User className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p style={{ fontFamily: 'Inter, sans-serif' }}>No submissions found</p>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-[#0d0c09] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Form Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-[#0d0c09] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Contact Info
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-[#0d0c09] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Details
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-[#0d0c09] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-[#0d0c09] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => handleLeadClick(submission)}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium ${getFormTypeColor(submission.form_type)}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                          {getFormTypeLabel(submission.form_type)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <User className="w-4 h-4 mr-2 text-[#0b1c26]" />
                            {submission.name}
                          </div>
                          <div className="flex items-center text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <Mail className="w-4 h-4 mr-2 text-[#0b1c26]" />
                            {submission.email}
                          </div>
                          {submission.phone && (
                            <div className="flex items-center text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <Phone className="w-4 h-4 mr-2 text-[#0b1c26]" />
                              {submission.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          {submission.location && (
                            <div className="flex items-center text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <MapPin className="w-4 h-4 mr-2 text-[#0b1c26]" />
                              {submission.location}
                            </div>
                          )}
                          {submission.project_description && (
                            <div className="text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <div className="flex items-start">
                                <MessageSquare className="w-4 h-4 mr-2 text-[#0b1c26] mt-0.5 flex-shrink-0" />
                                <span className="line-clamp-2">{submission.project_description}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-[#0b1c26]" />
                          {submission.created_at ? new Date(submission.created_at).toLocaleDateString() : 'N/A'}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {submission.created_at ? new Date(submission.created_at).toLocaleTimeString() : ''}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#0d0c09]">
                        <button
                          onClick={(e) => handleDeleteClick(submission, e)}
                          disabled={deletingId === submission.id}
                          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Delete submission"
                        >
                          {deletingId === submission.id ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden">
              <div className="space-y-4 p-4">
                {sortedSubmissions.map((submission) => (
                  <div 
                    key={submission.id} 
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => handleLeadClick(submission)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className={`inline-flex px-3 py-1 text-xs font-medium ${getFormTypeColor(submission.form_type)}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                        {getFormTypeLabel(submission.form_type)}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {submission.created_at ? new Date(submission.created_at).toLocaleDateString() : 'N/A'}
                        </div>
                        <button
                          onClick={(e) => handleDeleteClick(submission, e)}
                          disabled={deletingId === submission.id}
                          className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Delete submission"
                        >
                          {deletingId === submission.id ? (
                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-red-600"></div>
                          ) : (
                            <Trash2 className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <User className="w-4 h-4 mr-2 text-[#0b1c26]" />
                        {submission.name}
                      </div>
                      <div className="flex items-center text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Mail className="w-4 h-4 mr-2 text-[#0b1c26]" />
                        {submission.email}
                      </div>
                      {submission.phone && (
                        <div className="flex items-center text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <Phone className="w-4 h-4 mr-2 text-[#0b1c26]" />
                          {submission.phone}
                        </div>
                      )}
                      {submission.location && (
                        <div className="flex items-center text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <MapPin className="w-4 h-4 mr-2 text-[#0b1c26]" />
                          {submission.location}
                        </div>
                      )}
                    </div>
                    
                    {submission.project_description && (
                      <div className="mt-3 text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <div className="flex items-start">
                          <MessageSquare className="w-4 h-4 mr-2 text-[#0b1c26] mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{submission.project_description}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-3 text-xs text-gray-500 text-right" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Tap to view details
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </>
          )}
        </div>
      </div>

      {/* Lead Detail Modal */}
      {showLeadModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200" style={{ backgroundColor: '#0b1c26' }}>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-medium text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Lead Details</h2>
              </div>
              <button
                onClick={closeLeadModal}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Form Type Badge */}
              <div className="flex items-center space-x-3">
                <span className={`inline-flex px-3 py-1 text-sm font-medium ${getFormTypeColor(selectedSubmission.form_type)}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  {getFormTypeLabel(selectedSubmission.form_type)}
                </span>
                <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {selectedSubmission.created_at ? new Date(selectedSubmission.created_at).toLocaleDateString() : 'N/A'}
                </span>
                <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {selectedSubmission.created_at ? new Date(selectedSubmission.created_at).toLocaleTimeString() : ''}
                </span>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <User className="w-5 h-5 text-[#0b1c26]" />
                    <div>
                      <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Name</p>
                      <p className="text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>{selectedSubmission.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-[#0b1c26]" />
                    <div>
                      <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                      <p className="text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>{selectedSubmission.email}</p>
                    </div>
                  </div>

                  {selectedSubmission.phone && (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="w-5 h-5 text-[#0b1c26]" />
                      <div>
                        <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Phone</p>
                        <p className="text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>{selectedSubmission.phone}</p>
                      </div>
                    </div>
                  )}

                  {selectedSubmission.location && (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-[#0b1c26]" />
                      <div>
                        <p className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Location</p>
                        <p className="text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>{selectedSubmission.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Description */}
              {selectedSubmission.project_description && (
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Project Description</h3>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="w-5 h-5 text-[#0b1c26] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#0d0c09] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {selectedSubmission.project_description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => window.open(`mailto:${selectedSubmission.email}`)}
                  className="flex-1 bg-[#0b1c26] text-white py-2 px-4 rounded-lg hover:bg-[#0b1c26]/90 transition-colors flex items-center justify-center space-x-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </button>
                {selectedSubmission.phone && (
                  <button
                    onClick={() => window.open(`tel:${selectedSubmission.phone}`)}
                    className="flex-1 bg-white text-[#0b1c26] border border-[#0b1c26] py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </button>
                )}
                <button
                  onClick={closeLeadModal}
                  className="px-4 py-2 border border-gray-300 text-[#0d0c09] rounded-lg hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && submissionToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>Delete Lead</h2>
              </div>
              <button
                onClick={cancelDelete}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-[#0d0c09] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Are you sure you want to delete this lead? This action cannot be undone.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-[#0b1c26]" />
                    <span className="text-sm font-medium text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {submissionToDelete.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-[#0b1c26]" />
                    <span className="text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {submissionToDelete.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#0b1c26]" />
                    <span className="text-sm text-[#0d0c09]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {submissionToDelete.created_at ? new Date(submissionToDelete.created_at).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button
                  onClick={confirmDelete}
                  disabled={deletingId === submissionToDelete.id}
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {deletingId === submissionToDelete.id ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      <span>Delete Lead</span>
                    </>
                  )}
                </button>
                <button
                  onClick={cancelDelete}
                  disabled={deletingId === submissionToDelete.id}
                  className="px-4 py-2 border border-gray-300 text-[#0d0c09] rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
