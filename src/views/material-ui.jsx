// import React from 'react';
// // import classNames from 'classnames/bind';
// import RaisedButton from 'material-ui/RaisedButton';

// import { MuiThemeProvider, createMuiTheme, withTheme } from 'material-ui/styles';

// const darkTheme = createMuiTheme({
//   palette: {
//     primary1Color: '#03a9f4',
//     primary2Color: '#03a9f4',
//     pickerHeaderColor: '#03a9f4',
//     accent1Color: '#00bcd4',
//   },
// });

// const Instances = ({ theme }) => {
//   const labelStyle = {
//     backgroundColor: theme.palette.background.default,
//     color: theme.palette.text.primary,
//   };
//   return (
//     <Grid>
//       <div style={labelStyle}>
//         {`Hello ${theme.palette.type} Theme`}
//       </div>
//       <Button>
//         Button
//       </Button>
//       <Button color="primary">
//         Button primary
//       </Button>
//       <Button color="secondary">
//         Button secondary
//       </Button>
//       <Button color="primary" variant="raised">
//         Button primary
//       </Button>
//       <Button color="secondary" variant="raised">
//         Button secondary
//       </Button>
//     </Grid>
//   );
// };

// const InstancesWithTheme = withTheme()(Instances);

// const View = () => (
//   <div>
//     <InstancesWithTheme />
//     <MuiThemeProvider theme={darkTheme}>
//       <InstancesWithTheme />
//     </MuiThemeProvider>
//   </div>
// );

// export default View;
