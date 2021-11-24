import React from 'react';
import {FileLoaderWrapper} from "../../../UI/Elements/FileLoader/FileLoaderWrapper";
import FileList from "./FileList";
import {CaretDownOutlined} from "@ant-design/icons";
import LoaderCloser from "./LoaderCloser";

const FileLoader = () => {


    return (
        <FileLoaderWrapper  >
            <CaretDownOutlined className='caret' />
            <FileList />
            <LoaderCloser />
        </FileLoaderWrapper>
    );
};

export default FileLoader;