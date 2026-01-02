import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStudyLists, createStudyList, deleteStudyList, getStudyListItems, getLeeches } from '../../services/api';
import './StudyListsPage.css';
import './PageContainer.css';

const StudyListsPage = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      setLoading(true);
      const data = await getStudyLists();
      setLists(data);
    } catch (error) {
      console.error('Error fetching study lists:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateList = async (name, description, category) => {
    try {
      await createStudyList(name, description, [], category);
      await fetchLists();
      setShowCreateModal(false);
    } catch (error) {
      console.error('Error creating study list:', error);
    }
  };

  const handleCreateLeechList = async () => {
    try {
      const leeches = await getLeeches(75, 5);
      const leechIds = leeches.map(l => l.id);
      await createStudyList('My Leeches', 'Items I struggle with most', leechIds, 'leeches');
      await fetchLists();
    } catch (error) {
      console.error('Error creating leech list:', error);
    }
  };

  const handleDeleteList = async (id) => {
    if (!confirm('Are you sure you want to delete this study list?')) return;
    
    try {
      await deleteStudyList(id);
      await fetchLists();
      if (selectedList?._id === id) {
        setSelectedList(null);
        setListItems([]);
      }
    } catch (error) {
      console.error('Error deleting study list:', error);
    }
  };

  const handleViewList = async (list) => {
    try {
      setSelectedList(list);
      const items = await getStudyListItems(list._id);
      setListItems(items);
    } catch (error) {
      console.error('Error fetching list items:', error);
    }
  };

  return (
    <div className="page-container">
      <div className="study-lists-container">
          <div className="lists-sidebar">
            <div className="sidebar-header">
              <h2>My Lists</h2>
              <button onClick={() => setShowCreateModal(true)} className="create-button">
                + New List
              </button>
            </div>

            <button onClick={handleCreateLeechList} className="quick-create-button">
              🐛 Create Leech List
            </button>

            {loading ? (
              <div className="lists-loading">Loading...</div>
            ) : lists.length === 0 ? (
              <div className="no-lists">
                <p>No study lists yet</p>
                <small>Create one to get started!</small>
              </div>
            ) : (
              <div className="lists-menu">
                {lists.map(list => (
                  <div 
                    key={list._id} 
                    className={`list-item ${selectedList?._id === list._id ? 'active' : ''}`}
                    onClick={() => handleViewList(list)}
                  >
                    <div className="list-item-header">
                      <span className="list-name">{list.name}</span>
                      <span className="list-count">{list.itemIds.length}</span>
                    </div>
                    {list.description && (
                      <div className="list-description">{list.description}</div>
                    )}
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleDeleteList(list._id); }}
                      className="delete-list-btn"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="list-content">
            {selectedList ? (
              <>
                <div className="content-header">
                  <div>
                    <h2>{selectedList.name}</h2>
                    {selectedList.description && (
                      <p className="content-description">{selectedList.description}</p>
                    )}
                  </div>
                  <div className="content-badge">{listItems.length} items</div>
                </div>

                {listItems.length === 0 ? (
                  <div className="empty-list">
                    <p>This list is empty</p>
                    <small>Add items using the Item Browser</small>
                  </div>
                ) : (
                  <div className="items-grid">
                    {listItems.map(item => (
                      <div key={item.id} className="study-item-card">
                        <div className="item-character">{item.characters}</div>
                        <div className="item-meanings">{item.meanings.slice(0, 2).join(', ')}</div>
                        {item.readings && item.readings.length > 0 && (
                          <div className="item-readings">{item.readings.slice(0, 2).join(', ')}</div>
                        )}
                        <div className="item-meta">
                          <span>Lv {item.level}</span>
                          <span>{item.srsStageName}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="no-selection">
                <p>Select a study list to view its items</p>
              </div>
            )}
          </div>
        </div>

        {showCreateModal && (
          <CreateListModal
            onClose={() => setShowCreateModal(false)}
            onCreate={handleCreateList}
          />
        )}
    </div>
  );
};

const CreateListModal = ({ onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('custom');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate(name, description, category);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Create Study List</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Almost Burned Items"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="custom">Custom</option>
              <option value="leeches">Leeches</option>
              <option value="almost-burned">Almost Burned</option>
              <option value="jlpt-n5">JLPT N5</option>
              <option value="jlpt-n4">JLPT N4</option>
              <option value="jlpt-n3">JLPT N3</option>
              <option value="jlpt-n2">JLPT N2</option>
              <option value="jlpt-n1">JLPT N1</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Create List
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudyListsPage;
