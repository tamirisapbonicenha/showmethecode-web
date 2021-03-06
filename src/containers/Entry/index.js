import { Row, Col } from "react-grid-system"
import ReactTooltip from "react-tooltip"
import styled from "styled-components"
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Avatar } from "components"
import {
  fetchMyRoomsRequest,
  startListener,
} from "redux-flow/reducers/room/actions"
import { getAuthenticatedUser } from "redux-flow/reducers/auth/selectors"

import { getAllMyRooms } from "redux-flow/reducers/room/selectors"

import Welcome from "./Welcome"
import YourRooms from "./YourRooms"
import {
  JoinRoom as JoinRoomTitle,
  CreateRoom as CreateRoomTitle,
} from "./Titles"
import CreateRoomForm from "./CreateRoomForm"
import JoinRoomForm from "./JoinRoomForm"
import SectionForm from "./SectionForm"

const StyledAvatar = styled(Avatar)`
  display: block;
  margin: 15px auto;
`

export default function Entry() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMyRoomsRequest())
    dispatch(startListener())
  }, [dispatch])

  const { user, myRooms } = useSelector(state => ({
    user: getAuthenticatedUser(state),
    myRooms: getAllMyRooms(state),
  }))

  return (
    <Row>
      <Col sm={12}>
        <StyledAvatar src={user.avatar} alt={user.name} />
        <Welcome>{`Hi, ${user.name}`}</Welcome>
      </Col>
      <Col sm={12}>
        <Row>
          <Col sm={6}>
            <YourRooms rooms={myRooms} />
          </Col>
          <Col sm={6}>
            <SectionForm
              titleComponent={<JoinRoomTitle />}
              form={<JoinRoomForm />}
            />
            <SectionForm
              titleComponent={<CreateRoomTitle />}
              form={<CreateRoomForm />}
            />
          </Col>
        </Row>
      </Col>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </Row>
  )
}
