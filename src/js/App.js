import React from 'react';
import { useDropzone } from 'react-dropzone';
import './Drop.css'
// import { ipcRenderer } from 'electron';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const Basic = (props) => {

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: files => test(files)
  });

  function test(files) {
    console.log(files)
    files.forEach(file => e.api.dropped(file.path))
  }

  return (
    <Grid
      className='container'
      alignItems='center'
      justifyContent='center'
      container
      sx={{ width: '100%', height: '100vh', backgroundColor: '' }}
    >
      <section className="container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />

          <Box
            sx={{
              width: 300,
              height: 300,
              border: '5px dashed white',
              borderRadius: 3,
            }}
          >
            <Grid container
              alignItems='center'
              justifyContent='center'
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: isDragActive ? 'white' : ''
              }}>
              <Typography sx={{ color: 'primary.main', width: '60%', textAlign: 'center', fontSize: 28 }}>
                Drop a File or Folder Here
              </Typography>
            </Grid>
          </Box>
        </div>
      </section>
    </Grid>
  );
}

export default Basic