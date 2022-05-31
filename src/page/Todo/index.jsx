import { Button, Form, Icon, Input, Tooltip } from 'antd';
import React, { Component } from 'react';
let id = 0;
class index extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // const { form } = this.props;
    this.props.form.validateFields((error, values) => {
      console.log(values);
      if (!error) {
        console.log('submit!');
      }
    });
  };
  // 删除
  remove = (k) => {
    const { form } = this.props;
    const keys = this.props.form.getFieldValue('keys');
    console.log(keys, k);
    form.setFieldsValue({
      keys: keys.filter((key) => key !== k)
    });
  };
  // 添加
  add = () => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    form.setFieldsValue({
      keys: nextKeys
    });
  };
  // 校验密码
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && form.getFieldValue('password') !== value) {
      callback('两次密码不一致');
    } else {
      callback();
    }
  };
  render() {
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 10
      }
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        offset: 6,
        span: 10
      }
    };
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((item, index) => {
      return (
        <Form.Item key={item} label={index === 0 ? '用户' : ''} {...(index && formItemLayoutWithOutLabel)}>
          {getFieldDecorator(`user[${index}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: '请输入用户或者删除'
              }
            ]
          })(<Input placeholder='请输入用户' style={{ width: '80%' }} />)}
          <Icon className='dynamic-delete-button' type='minus-circle-o' onClick={() => this.remove(item)} />
        </Form.Item>
      );
    });
    return (
      <>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label='e-mail'>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'emial验证失败'
                },
                {
                  required: true,
                  message: 'email必须填写'
                }
              ]
            })(<Input></Input>)}
          </Form.Item>
          <Form.Item label='password'>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '密码必须填写'
                }
              ]
            })(<Input.Password></Input.Password>)}
          </Form.Item>
          <Form.Item label='Comfirm password'>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '请确认密码'
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input.Password></Input.Password>)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Nickname
                <Tooltip title='你叫什么名字'>
                  <Icon type='question-circle-o'></Icon>
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: '请输入你的名字', whitespace: true }]
            })(<Input />)}
          </Form.Item>
          {/* 这里写新增 */}
          {formItems}
          <Form.Item {...formItemLayoutWithOutLabel}>
            <Button type='dashed' onClick={this.add}>
              <Icon type='plus'></Icon>
              新增
            </Button>
          </Form.Item>
          <Form.Item {...formItemLayoutWithOutLabel}>
            <Button type='primary' htmlType='submit'>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

const wrapperForm = Form.create({
  name: 'horizontal_login'
})(index);

export default wrapperForm;
