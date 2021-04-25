plugins {
    base
    id("com.lovelysystems.gradle") version ("1.3.2")
}

lovely {
    gitProject()
    dockerProject("natterstefan/nextjs-template")
}

subprojects {
    apply {
        plugin("com.lovelysystems.gradle")
    }
}

val writeVersion by tasks.creating {
    group = "Development"
    description = "Write current version to file"

    val versionFile = file("version.js")
    doLast {
        exec {
            commandLine(
                "node",
                "scripts/version"
            )
        }
    }
    outputs.file(versionFile)
}

val runDockerBuild by tasks.creating {
    group = "Development"
    description = "Run Docker Image"
    dependsOn("buildDockerImage")
    doLast {
        exec {
            commandLine(
                "docker-compose",
                "--env-file",
                ".env.local",
                "-f",
                "docker-compose.yml",
                "up"
            )
        }
    }
}

with(lovely.dockerFiles) {
    // and copy all the output into the docker build folder
    from(tasks["writeVersion"].outputs)

    // packages
    from(".") {
        // files required to properly build and run the app in the docker image
        include(
            "public/**",
            "src/**",
            ".npmrc",
            "babel.config.js",
            "next-i18next.config.js",
            "next.config.js",
            "package.json",
            "postcss.config.js",
            "tailwind.config.js",
            "tsconfig.json",
            "version.js",
            "yarn.lock"
        )

        // exclude any config, test or generated files
        exclude(
            "**/__generated__",
            "**/*.log",
            "**/*.md",
            "**/.env",
            "**/.env.*",
            "**/.eslintcache",
            "**/.eslintrc.js",
            "**/.prettierignore",
            "**/.remarkrc.js",
            "**/coverage/**",
            "**/jest.config.js",
            "**/jest.setup.ts",
            "**/node_modules/**",
            "**/prettier.config.js",
            "**/stats.json",
            "**/tmp"
        )
    }

    // Dockerfile
    from("docker")
}
