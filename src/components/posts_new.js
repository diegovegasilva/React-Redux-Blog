import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class PostsNew extends Component {

    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
        var fieldType = () => {
            switch (field.type) {
                case 'text':
                default:
                    return (
                        <input
                            className="form-control"
                            type="text"
                            {...field.input}
                        />
                    )
                case 'textarea':
                    return (
                        <textarea
                            className="form-control"
                            {...field.input}
                        ></textarea>                    
                    )  
            }
        }
        return (
            <div className={className}>
                <label>{field.label}</label>
                {fieldType()}
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>    
            </div>
        )
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    type="text"    
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    type="text"    
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    type="textarea"    
                    label="Post content"
                    name="content"
                    component={this.renderField}
                />
                <button className="btn btn-primary" type="submit">Save</button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew);