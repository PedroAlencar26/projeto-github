import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const Starred = ({ starred }) => {
  return (
    <div>
      <Accordion className="mb-2">
        <Card Key={starred.id}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={starred.id}>
              {starred.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={starred.id}>
            <Card.Body>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <b>Descriçao:</b> {starred.description}
                </li>
                <li>
                  <b>Html URL:</b> {starred.html_url}
                </li>
                <li>
                  <b>Forks:</b> {starred.forks_count}
                </li>
                <li>
                  <b>Homepage:</b> {starred.homepage}
                </li>
                <li>
                  <b>Language:</b> {starred.language}
                </li>
                <li>
                  <b>Stargazers:</b> {starred.stargazers_count}
                </li>
                <li>
                  <b>Watchers:</b> {starred.watchers_count}
                </li>
                <li>
                  <b>Open Issues:</b> {starred.open_issues}
                </li>
                <li>
                  <b>Created At:</b> {starred.created_at}
                </li>
                <li>
                  <b>Updated At:</b> {starred.updated_at}
                </li>
                <li>
                  <b>Pushed At:</b> {starred.pushed_at}
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Starred;
