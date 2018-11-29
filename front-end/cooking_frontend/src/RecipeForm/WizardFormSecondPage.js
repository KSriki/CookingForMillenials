import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import {Header, Form, Button, Icon, Divider,List } from 'semantic-ui-react'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false



  const renderMembers = ({ fields, meta: { touched, error } }) => (
    <div>
      <div>
        <Button positive type="button" onClick={() => fields.push({})}>Add Ingredient</Button>
       
      </div>
      <List>
      {fields.map((ingred, index) =>
        <List.Item><div key={index}>
          
          <Field
            name={`${ingred + index}.name`}
            type="text"
            component={renderField}
            label="Name of Ingredient"/>
          <Field
            name={`${ingred + index}.pyramid`}
            type="text"
            component={renderField}
            label="Which part of the Food Pyramid?"/>
  <Button
            type="button"
            title="Remove Ingredient"
            onClick={() => fields.remove(index)}>
          <h4>Remove Ingredient #{index + 1}</h4>
          </Button>
        </div>
        {touched && error && <span>{error}</span>}
        </List.Item>
      )}
      </List>
    </div>
  )
  
  
  const WizardFormSecondPage = (props) => {
  const { handleSubmit, submitting, previousPage } = props
    return (
      <form onSubmit={handleSubmit}>
        <FieldArray name="ingredients" component={renderMembers}/>
        
        <Divider section />
      <div>
      <Button primary type="button" className="previous" onClick={previousPage}>
          Previous
        </Button>
      <Button primary type="submit" className="next">
        Continue <Icon name='right chevron' />
      </Button>
      
      </div>
      </form>
      
    )
  }


export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)