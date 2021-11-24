import React, {useState} from 'react';
import LoadFile from "./LoadFile";
import {FileLoaderList} from "../../../UI/Elements/FileLoader/FileLoaderList";
import File from "./File";

const FileList = () => {
    const [files, setFiles] = useState<File[]>([])

    return (
        <FileLoaderList>
            {
                files.map(file => <File setFiles={setFiles} path={file.name} key={file.name} />)
            }
            <LoadFile files={files} setFiles={setFiles} />
        </FileLoaderList>
    );
};

export default FileList;