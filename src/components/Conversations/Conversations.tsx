import { Form, FormControl } from 'react-bootstrap';
import { MdMessage } from 'react-icons/md';
import Avatar from '../Avatar/Avatar';
import ConversationItem from '../ConversationItem/ConversationItem';
import ProfileOffCanvas from '../ProfileOffCanvas/ProfileOffCanvas';
import './Conversations.css';

const Conversations = () => {
  return (
    <div className='Conversations'>
      <div className='d-flex flex-column align-items-center topbar'>
        <div className='d-flex justify-content-between w-100 pb-2 border-bottom border-secondary'>
          <Avatar url={process.env.REACT_APP_MOCK_AVATAR!} />
          <ProfileOffCanvas />
          <MdMessage size={28} />
        </div>
        <Form className='d-flex pt-2 w-100'>
          <FormControl
            type='search'
            placeholder='Search'
            aria-label='Search'
            className='rounded-pill'
            size='sm'
          />
        </Form>
      </div>
      <div>
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
        <ConversationItem
          title='Group name'
          avatar={process.env.REACT_APP_MOCK_GROUP_AVATAR!}
          subtitle='last message'
        />
      </div>
    </div>
  );
};

export default Conversations;
