import React from 'react';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';

const URL = () => (
  <Paper>
    <TextField
      hintText="https://myspace.com"
    />
  </Paper>
);

// export default connect(
//   state => ({ kittens: state.kittens }),
//   { addKitten, deleteKitten }
// )(
//   useSheet(Kittens, STYLES)
// );

export default URL