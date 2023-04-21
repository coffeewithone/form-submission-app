// Import required components from antd and React
import { Button, Col, Form, Input, Row, Select, Typography } from 'antd';
import axios from 'axios';
import React from 'react';

// Destructure Option from Select
const { Option } = Select;

const { Title } = Typography;
// Function to handle form submission on success
const onFinish = async (values) => {
  console.log('Success:', values);
  try {
    const response = await axios.post(
      'https://us-central1-form-submission-app.cloudfunctions.net/api/submit',
      values
    );
    console.log(response.data.message);
  } catch (error) {
    console.error('Error saving submission:', error);
  }
};

// Function to handle form submission on failure
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

// Functional component for the form
const CustomForm = () => {
  // Return the form layout using antd components
  return (
    // Use Row and Col to center the form on the page
    <Row justify="center">
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Title>Form Submission App</Title>
        {/* Use antd Form component to create the form */}
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish} // Call the onFinish function on successful submission
          onFinishFailed={onFinishFailed} // Call the onFinishFailed function on unsuccessful submission
          autoComplete="off"
        >
          {/* Use Form.Item to create the input fields */}
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input type="text" placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="mode"
            label="Mode"
            rules={[{ required: true, message: 'Please select a mode!' }]}
          >
            {/* Use Select to create a dropdown */}
            <Select placeholder="Select a mode" allowClear>
              {/* Use Option to create the dropdown options */}
              <Option value="Happy">Happy</Option>
              <Option value="Party vibe">Party vibe</Option>
              <Option value="Excited">Excited</Option>
              <Option value="Loved">Loved</Option>
              <Option value="Meh!">Meh!</Option>
            </Select>
          </Form.Item>
          {/* Use Button to create a submit button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

// Export the CustomForm component
export default CustomForm;
