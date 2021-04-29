import React, { useEffect, useState } from "react"
import { Flex, Box } from "reflexbox/styled-components"
import Link from "next/link"
import Cookies from "universal-cookie"
import dayjs from "dayjs"

// CSS imports
import styles from "../styles/components/cookie-notice.module.scss"

const CookieNotice = () => {
	const [HideCookieBanner, setHideCookieBanner] = useState(false)
	const cookies = new Cookies()
	const expire = dayjs().add(1, "year").format()

	function sleep(time) {
		return new Promise(resolve => setTimeout(resolve, time))
	}

	function setCookies() {
		setHideCookieBanner(true)
		cookies.set("cookie-consent", "allowed", { path: "/", expires: new Date(expire) })

		sleep(250).then(() => {
			document.getElementById("cookieNotice").remove()
		})
	}

	useEffect(() => {
		if (cookies.get("cookie-consent") === "allowed") {
			setHideCookieBanner(true)
		} else {
			setHideCookieBanner(false)
			document.getElementById("cookieNotice").style.display = "block"
		}
	})

	return (
		<div
			id="cookieNotice"
			className={styles["cookie-notice__wrapper"]}
			style={{
				opacity: HideCookieBanner ? 0 : 1,
				visibility: HideCookieBanner ? "hidden" : "visible",
			}}
		>
			<div className={styles["cookie-notice"]}>
				<Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
					<Box className={styles["cookie-notice__content"]} width={[1, 1, 3 / 4]}>
						<p>
							We use{" "}
							<Link href="/cookies">
								<a title="cookies and similar technologies">cookies and similar technologies</a>
							</Link>{" "}
							to provide you with a great user experience.
						</p>
					</Box>
					<Flex width={[1, 1, 1 / 4]} justifyContent={["flex-start", "flex-start", "flex-end"]}>
						<button className={styles["cookie-notice__button"]} onClick={setCookies}>
							Close
						</button>
					</Flex>
				</Flex>
			</div>
		</div>
	)
}

export default CookieNotice