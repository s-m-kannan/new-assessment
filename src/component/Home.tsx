import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu'; 
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import coldcoffee from  '../images/coldcoffee.jpg';
import wallpaper from '../images/wallpaper.jpg';
import slide from '../images/slide.jpg';
import paper from '../images/paper.jpeg';
import post from '../images/post.jpg';
import panel from '../images/panel.jpeg';
import change from '../images/change.jpeg';
import './Home.css';
import { Card, CardMedia, CardContent, CardActions, Grid } from '@mui/material';
import { Margin } from '@mui/icons-material';


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" 
        sx={{
            mt: '0px',
            backgroundColor: 'black',  }}
            >
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                   
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        COFFEE SHOP
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                        
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                          
                        >
                           
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        COFFEE SHOP
                    </Typography>
                    {/* <Typography>Home</Typography> */}
                   

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={coldcoffee} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                         
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                           >
                        </Menu>
                      
                    </Box>
                    <Typography style={{ marginLeft: '600px' }}>
      Home
    </Typography>
    <Typography style={{ marginLeft: '50px' }}>
    About
    </Typography>

    <Typography style={{ marginLeft: '50px' }}>
    Gallery
    </Typography>

    <Typography style={{ marginLeft: '50px' }}>
    Order
    </Typography>

    <Typography style={{ marginLeft: '50px' }}>
    Contact us
    </Typography>
                </Toolbar>
               
            </Container>
        </AppBar>
    );
}

function CardComponent () {
    const cardData = [
      {
        title: 'Esperrso coffee',
        image: wallpaper,
        description: 'Espresso is one of the most popular coffee-brewing methods, of Italian origin. The French also made a significant contribution to the invention of the first coffee makers, predecessors of today  espresso machines, and generally to the café culture',
       
      },
      {
        title: 'Cappuccino cofee',
        image: paper,
        description: 'A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or cocoa powde',
      },
      {
        title: 'Flatwhite coffee',
        image: post,
        description: 'A flat white is a blend of micro-foamed milk poured over a single or double shot of espresso. This microfoam is steamed milk infused with air, to create a smooth and velvety texture and creamy taste. Precise pouring and steaming of the microfoam is essential in making a flat white',
      },
    ];
  
    const navigate = useNavigate();

    function handleClick() {
        navigate('./Product');
      }

    return (
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={card.title}
                height="140"
                image={card.image}
                style={{objectFit:"contain"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <button className='coffee-buy' onClick={handleClick}>Buy Now</button>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  
 

function Home() {
    return (
<div style={{backgroundColor:'#E8E3CF'}}>
            <ResponsiveAppBar />
            <div className='poster'>
    <div className='image-container'>
        <img src={panel} alt="coffee" style={{ width: '100%', height: '300px' }} />
    </div>
    </div>
    <div>
        <h2>Life begins after coffee</h2>
        <h1>"Life without coffee is like something without something... I have no idea; I'm too tired without my coffee."</h1>
    </div>
    <h2>Gallery</h2>
        <CardComponent />
    <h2>About us</h2>
    <div className="about">
        <p>
          At coffee shop, we are passionate about providing you with the finest coffee
          experience. Our journey began with a love for exceptional coffee and a desire to create a
          warm and inviting space for coffee enthusiasts.
        </p>
    </div>
      
    <div className='last'>
        <div className='details'>
        <ul>
        <li>Coffee House</li>
        <li>Our Heritage</li>
        <li>Our Company</li>
        </ul></div>
        <div className='details1'>
        <ul>
        <li>Community</li>
        <li>Ethical Sourcing</li>
        <li>Diversity</li>
        </ul>
        </div>
        <div className='details2'>
        <ul>
        <li>Privacy Policy</li>
        <li>Carrers</li>
        <li>Customer Service</li>
        </ul></div>
    </div>
</div>
    );
}

export default Home;

