import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    logo: (
        <span style={{ color: "", fontSize: "30px" }}>
            NextDev<span style={{ color: "red", fontSize: "50px" }}>.</span>
            <span
                style={{
                    color: "red",
                    fontSize: "30px",
                    fontWeight: "bolder",
                }}>
                io
            </span>
        </span>
    ),
    project: {
        link: "https://github.com/Deveripon/javascript-documentation-nextra",
    },
    docsRepositoryBase:
        "https://github.com/Deveripon/javascript-documentation-nextra/tree/main/",
    // ... other theme options
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "%s – NextDev.io",
            };
        }
    },
    head: (
        <>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            />
            <meta
                property='og:title'
                content='Nextra'
            />
            <meta
                property='og:description'
                content='The next site builder'
            />
        </>
    ),
    banner: {
        key: "2.0-release",
        text: (
            <a
                href='https://github.com/deveripon/'
                target='_blank'>
                🎉 follow my github →
            </a>
        ),
        dismissible: false,
    },
    toc: {
        backToTop: true,
    },
    sidebar: {
        defaultMenuCollapseLevel: 2,
    },
};

