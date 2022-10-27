import styles from './NewUserHasCompletedAssignment.module.scss';
import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormLabel, FormSelect, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Api } from "../../index";
import ToastHelper from "../../components/ToastHelper";
import { ErrorToast, SuccessToast } from "../../components/MyToasts";

interface NewUserHasCompletedAssignmentProps {}

const helper = new ToastHelper();

async function submitForm() {}

function NewUserHasCompletedAssignment() {
  const [assignments, updateAssignments] = useState([] as JSX.Element[]);

  /*
  useEffect(() => {
    Api.assignmentsAllGet().then((res) => {
      const objs = res.data.map((assignment) => (
        <option value={assignment.assignment_id} key={"assignment_" + assignment.assignment_id}>
          {assignment.text.slice(0, Math.min(10, assignment.text.length - 1))}
        </option>
      ));
      updateAssignments(objs);
    });
  }, []);
  */
  const [users, updateUsers] = useState([] as JSX.Element[]);
  useEffect(() => {
    Api.usersAllGet().then((res) => {
      const objs = res.data.map((user) => (
        <option value={user.user_id} key={"user_" + user.user_id}>
          {user.first_name + " " + user.last_name}
        </option>
      ));
      updateUsers(objs);
    });
  }, []);

  return (
    <Form>
      <h2>Create New User Has Completed Assignment Relation</h2>
      <FormGroup>
        <FormLabel>User</FormLabel>
        <FormSelect>
          {/*<option disabled selected hidden>Select User</option>*/}
          {users}
        </FormSelect>
      </FormGroup>
      <FormGroup>
        <FormLabel>Assignment</FormLabel>
        <FormSelect>
          {/*<option disabled selected hidden>Select Group</option>*/}
          {assignments}
        </FormSelect>
      </FormGroup>
      <FormGroup>
        <FormLabel>Timestamp</FormLabel>
        <FormControl type="datetime-local" />
      </FormGroup>
      <FormGroup>
        <Button type="submit" className={"mt-3"}>
          Submit
        </Button>
      </FormGroup>

      {helper.showSuccess && (
        <SuccessToast body={helper.successContent}></SuccessToast>
      )}
      {helper.showError && <ErrorToast body={helper.errorContent}></ErrorToast>}
    </Form>
  );
}

export default NewUserHasCompletedAssignment;
