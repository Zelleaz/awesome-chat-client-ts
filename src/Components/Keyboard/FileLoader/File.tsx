import React, {Dispatch, FC, SetStateAction} from 'react';
import {FileLoaderItem} from "../../../UI/Elements/FileLoader/FileLoaderItem";
import {getFileInfo} from "../../../Utils/getFileInfo";
import {ContactCloserWrapper} from "../../../UI/Elements/Contact/ContactCloserWrapper";
import {CloseOutlined} from "@ant-design/icons";

interface FileProps {
    path: string
    setFiles: Dispatch<SetStateAction<File[]>>
}

const File: FC<FileProps> = ({ path, setFiles }) => {
    console.log(path)
    const [name, ext] = getFileInfo(path)

    const remove = () => {
        setFiles(prev => prev.filter(file => file.name !== path))
    }

    return (
        <FileLoaderItem>
            <div className="wrapper">
                {ext}
            </div>
            <ContactCloserWrapper onClick={remove} isFile={true} top={'auto'} left={'auto'} bottom={15} right={-10}>
                <CloseOutlined />
            </ContactCloserWrapper>
            {name}
        </FileLoaderItem>
    );
};

export default File;