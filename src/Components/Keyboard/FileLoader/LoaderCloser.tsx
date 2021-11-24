import React from 'react';
import {CloseOutlined} from "@ant-design/icons";
import {FileLoaderCloser} from "../../../UI/Elements/FileLoader/FileLoaderCloser";
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {toggleFileLoaderView} from "../../../Store/reducers/interfaceReducer/interfaceCreators";

const LoaderCloser = () => {
    const dispatch = useAppDispatch()

    const close = () => {
        dispatch(toggleFileLoaderView())
    }

    return (
        <FileLoaderCloser onClick={close}>
            <CloseOutlined />
        </FileLoaderCloser>
    );
};

export default LoaderCloser;