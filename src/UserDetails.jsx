import React, { useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import axios from "axios";
import Profile from "./Components/Profile";
import Repos from "./Components/Repos.jsx";
import Starred from "./Components/Starred";

const UserDetials = ({ match }) => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${match.params.username}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${match.params.username}/repos?per_page=5`
      )
      .then((res) => {
        setRepos(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${match.params.username}/starred?&per_page=5`
      )
      .then((res) => {
        setStarred(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="container mt-5">
      <Profile user={user} />
      <Accordion>
        <Card className="card mb-3">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Repositórios
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {repos.map((repo) => (
                <Repos key={repo.id} repo={repo} />
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Starred
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {starred.map((starred) => (
                <Starred key={starred.id} starred={starred} />
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default UserDetials;
