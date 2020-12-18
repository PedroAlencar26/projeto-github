import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const Repos = ({ repo }) => {

  return (
    <div>
      <Accordion className="mb-2">
        <Card Key={repo.id}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={repo.id}>
              {repo.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={repo.id}>
            <Card.Body>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <b>Descriçao:</b> {repo.description}
                </li>
                <li>
                  <b>Html URL:</b> <a href={repo.html_url} target="_blank">{repo.html_url}</a>
                </li>
                <li>
                  <b>Forks:</b> {repo.forks_count}
                </li>
                <li>
                  <b>Homepage:</b> {repo.homepage}
                </li>
                <li>
                  <b>Language:</b> {repo.language}
                </li>
                <li>
                  <b>Stargazers:</b> {repo.stargazers_count}
                </li>
                <li>
                  <b>Watchers:</b> {repo.watchers_count}
                </li>
                <li>
                  <b>Open Issues:</b> {repo.open_issues}
                </li>
                <li>
                  <b>Created At:</b> {repo.created_at}
                </li>
                <li>
                  <b>Updated At:</b> {repo.updated_at}
                </li>
                <li>
                  <b>Pushed At:</b> {repo.pushed_at}
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Repos;