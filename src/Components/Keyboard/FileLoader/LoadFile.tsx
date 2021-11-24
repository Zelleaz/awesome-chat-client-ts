import React, {ChangeEvent, Dispatch, FC, SetStateAction, SyntheticEvent, useState} from 'react';
import {FileLoaderButton} from "../../../UI/Elements/FileLoader/FileLoaderButton";
import {PlusCircleOutlined} from "@ant-design/icons";
import {FileLoaderInput} from "../../../UI/Elements/FileLoader/FileLoaderInput";
import {v4} from "uuid";
import {log} from "util";

interface LoadFileProps {
    setFiles: Dispatch<SetStateAction<File[]>>
    files: File[]
}
const LoadFile: FC<LoadFileProps> = (props) => {
    const [isActive, setIsActive] = useState(false)


    const dragStart = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsActive(true)
    }

    const dragEnd = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsActive(false)
    }

    const onDrop = (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data = e.dataTransfer.files
        const files: File[] = []

        for (let i = 0; i < data.length; i++) {
            const file = data.item(i);

            if (file) {
                const candidate = props.files.find(f => f.name === file.name)
                if (!candidate) {
                    files.push(file)
                    props.setFiles(prev => {
                        return [...files, ...prev]
                    })
                }
            }
        }
    }

    const onFilesSelected = (e: ChangeEvent<HTMLInputElement>) => {
        const loadedFiles = e.target.files
        if (loadedFiles) {
            const filesToUpload: File[] = []

            for (let i = 0; i < loadedFiles.length; i++) {
                const file = loadedFiles.item(i)
                if (file) {
                    const candidate = props.files.find(f => f.name === file.name)
                    if (!candidate) {
                        filesToUpload.push(file)
                    }
                }
            }

            props.setFiles(prev => [...filesToUpload, ...prev])
        }
    }

    return (
        <FileLoaderButton
            onDragStart={dragStart}
            onDragLeave={dragEnd}
            onDragOver={dragStart}
            onDrop={onDrop}
            isActive={isActive}>
            <div> <PlusCircleOutlined /> </div>
            Add Files
            <FileLoaderInput
                onChange={onFilesSelected}
                title=' '
                placeholder='Add Files'
                type="file"
                multiple
            />
        </FileLoaderButton>
    );
};

export default LoadFile;