import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styles from './VideoEmbed.module.scss';
import { Stack } from '../../shared/ui/Stack/Stack';

const VideoEmbed = () => {
    return (
    <Stack direction='row' justify='justifyCenter' className={styles.section}>
        <ReactPlayer url="https://youtu.be/Y0UH4deDa8I?si=NYZ6AdQ4mEMnxqGf" />
    </Stack>
    );
};

export default VideoEmbed;
