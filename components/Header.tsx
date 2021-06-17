import React from "react"
import Image from "next/image"
import styles from "../styles/components/header.module.scss"

const Header = () => (
	<header className={styles.header}>
		<Image
			src={`${process.env.NEXT_PUBLIC_IMAGEKIT}thumbnail_JHMOxBSr9F4.png`}
			alt="Thumbnail"
			layout="responsive"
			objectFit="cover"
			objectPosition="center"
			width={1020}
			height={400}
			placeholder="blur"
			blurDataURL={`${process.env.NEXT_PUBLIC_IMAGEKIT_PLACEHOLDER}thumbnail_JHMOxBSr9F4.png`}
		/>
	</header>
)

export default Header
