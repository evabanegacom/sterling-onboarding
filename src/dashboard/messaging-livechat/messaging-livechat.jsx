import React, { useState } from 'react';

const dummyUsers = [
  { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Alice Johnson', avatar: 'https://via.placeholder.com/50' },
];

const dummyMessages = {
  1: [
    { id: 1, text: 'Hello!', sender: 'John Doe' },
    { id: 2, text: 'Hi, how are you?', sender: 'You' },
  ],
  2: [
    { id: 1, text: 'Good morning!', sender: 'Jane Smith' },
    { id: 2, text: 'Good morning, Jane!', sender: 'You' },
  ],
  3: [
    { id: 1, text: 'Hey!', sender: 'Alice Johnson' },
    { id: 2, text: 'Hello Alice!', sender: 'You' },
  ],
};

const MessagingLivechat = () => {
  const [selectedUser, setSelectedUser] = useState(dummyUsers[0]);
  const [messages, setMessages] = useState(dummyMessages[selectedUser.id]);
  const [newMessage, setNewMessage] = useState('');

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setMessages(dummyMessages[user.id]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessages = [...messages, { id: Date.now(), text: newMessage, sender: 'You' }];
      setMessages(newMessages);
      setNewMessage('');
      // Update the dummyMessages to persist the new message (in real app, update server)
      dummyMessages[selectedUser.id] = newMessages;
    }
  };

  return (
    <div className="flex h-screen gap-3 p-3">
      <UserList users={dummyUsers} onUserClick={handleUserClick} selectedUser={selectedUser} />
      <ChatWindow 
        selectedUser={selectedUser} 
        messages={messages} 
        newMessage={newMessage} 
        setNewMessage={setNewMessage} 
        handleSendMessage={handleSendMessage} 
      />
    </div>
  );
};

const UserList = ({ users, onUserClick, selectedUser }) => {
  return (
    <div className="w-1/4 border-r border-gray-300 bg-white rounded-lg shadow-md overflow-y-auto py-3">
      <div className='text-2xl text-black font-bold ps-3'>Messaging</div>
      <div className='px-3'>
        <input type="text" placeholder="Search users..." className="w-full bg-gray-200 p-2 border border-gray-300 rounded mt-3" />
      </div>
      <div>
        <p className='text-black font-semibold text-base ps-3'>Sort by</p>
        <select className='w-full outline-none bg-gray-200 p-2 border border-gray-300 rounded mt-3'>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      {users.map((user) => (
        <div 
          key={user.id} 
          className={`flex items-center p-4 cursor-pointer ${selectedUser.id === user.id ? 'bg-gray-200' : ''}`} 
          onClick={() => onUserClick(user)}
        >
          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
          <div className="font-bold">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

const ChatWindow = ({ selectedUser, messages, newMessage, setNewMessage, handleSendMessage }) => {
  return (
    <div className="w-3/4 flex flex-col justify-between bg-white shadow-md rounded-lg">
      <div className="flex items-center p-4 border-b border-gray-300">
        <img src={selectedUser.avatar} alt={selectedUser.name} className="w-12 h-12 rounded-full mr-4" />
        <div className="font-bold">{selectedUser.name}</div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded ${msg.sender === 'You' ? 'bg-green-200' : 'bg-gray-200'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-300 flex">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type a message..." 
          className="flex-1 p-2 border border-gray-300 rounded mr-4"
        />
        <button 
          onClick={handleSendMessage} 
          className="bg-green-500 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessagingLivechat;
