import styled from "styled-components";
import {AvatarSmall} from "../../Avatar/AvatarSmall";
import {useTypedSelector} from "../../../../Hooks/useTypedSelector";
import {GroupStatus} from "./GroupStatus";
import {UserStatuses} from "../../../../types";
import {FC} from "react";

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

interface GroupImgProps {
    status: UserStatuses
    imgUrl: string | undefined
}

export const GroupImg: FC<GroupImgProps> = ({ status, imgUrl }) => {
    return (
        <ImgContainer>
            <AvatarSmall src={imgUrl ? imgUrl : '/user.jpg'} status={status} />
            <GroupStatus
                left={30}
                top={4}
                status={status}
            />
        </ImgContainer>
    )
}