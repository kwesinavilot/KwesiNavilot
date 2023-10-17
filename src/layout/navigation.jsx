import { createStyles, Header, Group, Burger, Container, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from "next/link";
// import { Sidebar } from './SideMenu';

const useStyles = createStyles((theme) => ({
    inner: {
        height: 70,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    topLink: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        textDecoration: 'none',
        color: '#868e96',
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        transition: 'color 0.3s',
        position: 'relative',

        '&:hover': {
            color: theme.colors.main[5],
        },

        '&:hover::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: theme.colors.main[5],
            transition: 'transform 0.3s',
            transform: 'scaleX(1)',
            transformOrigin: 'left center',
        },

        '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: theme.colors.main[5],
            transition: 'transform 0.3s',
            transform: 'scaleX(0)',
            transformOrigin: 'left center',
        },

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    subLink: {
        textDecoration: 'none',
        lineHeight: 1,
    },

    linkInner: {
        textDecoration: 'none',
        lineHeight: 1,
    },

    linkLabel: {
        marginRight: 5,
    },

    header: {
        backgroundColor: theme.white,

        [theme.fn.largerThan('xs')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },

        [theme.fn.largerThan('sm')]: {
            paddingLeft: 25,
            paddingRight: 25,
        },

        [theme.fn.largerThan('md')]: {
            paddingLeft: '10%',
            paddingRight: '10%',
        },
    }
}));

const headerLinks = [
    {
        link: '/',
        label: 'Home',
    },
    {
        link: '/about',
        label: 'About',
    },
    {
        link: '/projects',
        label: 'Projects',
    },
    {
        link: '/skills',
        label: 'Skills',
    },
    {
        link: '/contact',
        label: 'Contact',
    },
];

export function Navigation() {
    // const [opened, { open, close }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = headerLinks.map((link) => {
        return (
            <Link
                key={link.label}
                href={link.link || '#'}
                className={classes.topLink}
            >
                {link.label}
            </Link>
        );
    });

    return (
        <>
            {/* <Sidebar opened={opened} close={close} /> */}

            <Header height={70} zIndex={1000} fixed="true" className={classes.header}>
                <Container size="xl" fluid="true">
                    <div className={classes.inner}>
                        <Link
                            href="/"
                            style={{ textDecoration: 'none', border: "solid 2px redirect" }}
                        >
                            <Title order={4} color='black'>Kwesi Ankomahene</Title>
                        </Link>

                        <Group spacing={5} className={classes.links}>
                            {items}
                        </Group>

                        {/* <Burger
                            opened={opened}
                            onClick={open}
                            className={classes.burger}
                            size="md"
                            title="Open navigation"
                            aria-label="Open navigation"
                        /> */}
                    </div>
                </Container>
            </Header>
        </>
    );
}