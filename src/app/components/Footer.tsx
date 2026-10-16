"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
//import { BusinessDetails } from "../types/google-business";

const copyright = {
    currentYear : new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(Date.now())
}

//let businessData =  {};

export default function Footer() {
	// Add Later
	// const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || '';


	const [businessData, setBusiness] = useState(
		{
			/* // Add Later
			postalAddress: {
				"regionCode": "US",
				"languageCode": "en-US",
				"postalCode": "53714",
				"administrativeArea": "Wisconsin",
				"locality": "Madison",
				"addressLines": [
					"4222 Milwaukee St, Suite 25"
				],
				"organization": ""
			}, 
			nationalPhoneNumber: '(608) 422-0468',
			internationalPhoneNumber: '+1 608-422-0468',
			googleMapsUri: 'https://maps.google.com/?cid=3868547639363751135&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA', 
			regularOpeningHours: {
				"openNow": false,
				"periods": [],
				"weekdayDescriptions": [
					"Monday: 11:00 AM - 6:00 PM",
					"Tuesday: 11:00 AM - 6:00 PM",
					"Wednesday: 9:00 AM - 6:00 PM",
					"Thursday: 9:00 AM - 6:00 PM",
					"Friday: 9:00 AM - 6:00 PM",
					"Saturday: 9:00 AM - 5:00 PM",
					"Sunday: 12:30 - 5:00 PM"
				],
			}
			*/
		}
	);
	// const [loading, setLoading] = useState(true);
	// const [err, setError] = useState(null);

	

	useEffect(() => {
		/* // Add Later
		const GetBusinessData = async () => {
		
			try {
				const response = await fetch(`/api/business?placeId=${placeId}`);
				if (!response.ok) {
					throw new Error('Could not fetch location.');
				}
				const data = await response.json();
				//console.log(data);
				setBusiness(data);
				//console.log(businessData);
				// .then((res) => res)
				// .then((data) => data)
				// .catch((err) => console.error(err));
			}
			catch(error) {;
				console.error(error);
				// setError(error);
			}
			finally {
				// setLoading(false);
			}
		};

		GetBusinessData();
		*/
	}, []);

	//console.log(businessData);

	// if (loading) return <div>Loading business data...</div>;
  	//if (err) return <div>{err}</div>;


    return (
			<footer className="py-3 my-4 border-top">
				<div className='container'>
					<div className="row justify-content-between align-items-center">

						{/* <div className="col-12 col-md-6 col-lg-4 col-xl-3 align-items-center">
							<Image src="/images/Nails-by-Bonnie.png" className="my-2 mx-md-auto img-fluid" alt="Nail Services by Bonnie" width="200" height="150" loading="eager" /><br/>

						</div>
						<div className="col-12 col-md-6 col-lg-4 align-items-center text-body-secondary">
							<p className="mb-2">
								<Link href={businessData.googleMapsUri} target="_blank">
								{businessData.postalAddress.addressLines[0]}<br/>
									{`
										${businessData.postalAddress.locality},  ${businessData.postalAddress.administrativeArea.replace("Wisconsin", "WI")} ${businessData.postalAddress.postalCode}
									`}<br/>
									<em className="fs-6">(Located in Efi&apos;s Nails)</em><br/>
								</Link>
							</p>
							<p className="mb-2">
								Call or Text: <Link href={`tel:${businessData.internationalPhoneNumber.replace(/[\s-]/gi, '')}`}>{businessData.nationalPhoneNumber}</Link>
							</p>
							<p className="mb-2">
								e-Mail: <Link href={"mailto:nailsbybonniemadison@gmail.com"}>NailsByBonnieMadison@gmail.com</Link>
							</p>
						</div>
						<div className="col-12 col-md-6 col-lg-4 col-xl-3 align-items-center">
							<ul className="list-unstyled text-body-secondary mb-1">
								{
									businessData.regularOpeningHours.weekdayDescriptions.map((date, index, []) => (
										<li key={index}>{date}</li>
									))
								}
							</ul>
							<p className='small'>For more up-to-date times <Link href={businessData.googleMapsUri} target="_blank">click here to view Bonnie&apos;s Google Maps Profile</Link>.</p>
						</div>

						<div className="col-12 col-md-6 col-lg-4 col-xl-2">
							<a className="fs-1" href="https://www.instagram.com/nailsbybonniemadison" target="_blank" aria-label="Instagram">
								<i className="fa-brands fa-square-instagram"></i>
							</a>
							<a className="fs-1" href="https://www.facebook.com/nailsbybonniemadison/" target="_blank" aria-label="Facebook">
								<i className="fa-brands fa-facebook"></i>
							</a>
						</div> */}



						<div className="col-12 col-md-6 col-lg-12 text-body-secondary">
								© {copyright.currentYear} Golden Nails &amp; Spa
						</div>
						
					</div>
				</div>
				
			</footer>
		);
}