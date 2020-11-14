import React, { useState, useEffect } from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core'

  
import { makeStyles } from '@material-ui/core/styles';
// import database from '../../firebase';
import './Questions.css'

const infoCards = [
    { color: '#b3ffd9', title: 'Are you clever ?'},
    { color: '#ffccff', title: 'How clever are you?'},
    { color: '#ffd9b3', title: 'Crack a joke'},
    { color: '#cce6ff', title: 'Sing a song for me'},
    { color: '#b3ffb3', title: 'When will the world end?'},
    { color: '#ffe6b3', title: '15 + 8'},
    { color: '#b3b3ff', title: 'Is it raining?'},
    { color: '#ffb3ff', title: 'How old are you?'},
    { color: '#ccf2ff', title: 'Who are you'},
    { color: '#fff0b3', title: 'Happy birthday'},
    { color: '#ddff99', title: 'What are you wearing'},
    { color: '#80ffbf', title: 'Do you believe in ghosts?'},
    { color: '#ffccff', title: 'What is your IQ?'},
    { color: '#cce6ff', title: 'What is the current time'},

  ];

const useStyles = makeStyles({

    root: {
      position: 'relative',
      maxWidth: '100%',
      justifyContent: 'center',
      margin: '0.5rem',
    },
  });

function Questions() {

    // const [questions, setquestions] = useState([]);

    // useEffect(() => {
    //     const unsubscribe = database.collection('questions').onSnapshot((snapshot) => 
    //         setquestions(snapshot.docs.map(doc => doc.data()))
    //     );
    
    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);

    const classes = useStyles();
    return (
        <div className="questions">
            <h2 className="ask">Ask me anything !</h2>
            <Grid container spacing={2}>
            {infoCards.map( infocard => (
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Card className={classes.root} style={{backgroundColor: `${infocard.color}`}}>
                    <CardContent>
                        <Typography className="qs">
                        {infocard.title}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            ))}
            <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.root} style={{backgroundColor: '#b3d9ff'}}>
                    <CardContent>
                        <Typography className="more">
                        And much moreeee...!!!
                        </Typography>
                    </CardContent>
                    </Card>
            </Grid>
            </Grid>
        </div>
    )
}

export default Questions
