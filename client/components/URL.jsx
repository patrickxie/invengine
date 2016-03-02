import React from 'react';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';

const URL = () => (
  <Paper>
    <TextField
      floatingLabelText="Enter what you would like to share"
      hintText="http://myspace.com"
    />
  </Paper>
);
//submit button, onEnterkepressdon={dispatch}
//paste button, onPaste={dispatch} 


// export default connect(
//   state => ({ kittens: state.kittens }),
//   { addKitten, deleteKitten }
// )(
//   useSheet(Kittens, STYLES)
// );

export default URL