import React, {FC} from 'react';
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {MessageWrapper} from "../../UI/Elements/Messages/MessageWrapper";
import {MessageBody} from "../../UI/Elements/Messages/MessageBody";
import {MessageImg} from "../../UI/Elements/Messages/MessageImg";
import {MessageContent} from "../../UI/Elements/Messages/MessageContent";
import {MessageTitle} from "../../UI/Elements/Messages/MessageTitle";
import {MessageTime} from "../../UI/Elements/Messages/MessageTime";
import TimeCorrector from "../../Utils/TimeCorrector";
import {MessageByUserNotifier} from "../../UI/Elements/Messages/MessageByUserNotifier";
import {Flex} from "../../UI/Elements/Flex";
import {v4} from "uuid";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {setContactInfoView} from "../../Store/reducers/interfaceReducer/interfaceCreators";
import {Message as Msg} from "../../Api/Messages/types";

const Message: FC<Msg> = (props) => {
    const { id, imgUrl, status } = useTypedSelector(state => state.user)
    const dispatch = useAppDispatch()
    const isByUser = props.userId === id
    const lines = props.body.split('\n')

    const receiver = props.room?.users?.find(user => user.id !== id) ?? null

    return (
        <MessageWrapper isByUser={isByUser}>
            <MessageTitle isByUser={isByUser}>{props.user?.name}</MessageTitle>
            <MessageBody isByUser={isByUser}>
                <MessageContent isByUser={isByUser}>
                    {
                        lines.map(text => (
                            <span key={v4()}>
                                {text}
                                <br/>
                            </span>
                        ))
                    }
                    <Flex alignSelf='flex-end'>
                        <MessageTime>{TimeCorrector.getLocalTime(props.creationDate)}</MessageTime>
                        {isByUser && <MessageByUserNotifier />}
                    </Flex>
                </MessageContent>
                <MessageImg onClick={() => dispatch(setContactInfoView(true))}
                            src={imgUrl ? imgUrl : '/user.jpg'}
                            status={receiver && receiver.status >= 0 && id !== props.userId ? receiver.status : status} />
            </MessageBody>
        </MessageWrapper>
    );
};

export default Message;