import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Label, Button, Image } from "semantic-ui-react";
import moment from "moment";

const PostCard = ({ post }) => {
  const {
    id,
    body,
    username,
    createdAt,
    likeCount,
    commentCount,
    likes,
  } = post;

  const handleLikePost = () => {
    console.log("like");
  };

  const handleCommentOnPost = () => {
    console.log("comment");
  };

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={handleLikePost}>
          <Button color='purple' basic>
            <Icon name='heart' />
          </Button>
          <Label basic color='purple' pointing='left'>
            {likeCount}
          </Label>
        </Button>
        <Button as='div' labelPosition='right' onClick={handleCommentOnPost}>
          <Button color='teal' basic>
            <Icon name='comments' />
          </Button>
          <Label basic color='teal' pointing='left'>
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
