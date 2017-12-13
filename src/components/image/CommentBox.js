import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const CommentExample = (props) => {

return(
  <Comment.Group>
    <Header as='h3' dividing>Comments</Header>
    <Comment>
      <Comment.Content>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Content>
    </Comment>
    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  )

}

export default CommentExample
