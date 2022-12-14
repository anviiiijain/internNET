/**
 *
 * EditDetailsModal
 *
 */
import React, { useEffect, useState } from "react";
import { FormGenerator } from "./shared/FormGenerator";
import { Modal } from "./shared/Modal";
import { updateProfile } from "../api/student";

//    visible: boolean;
//    hide: Function;
//    type: 'internship' | 'personal';

export function EditDetailsModal(props) {
	const { visible, hide, type, profileData } = props;
	// const profile = useSelector((state) => state.profile);
	// const dispatch = useDispatch();
	// const { updatePersonalDetails } = profileActions;
	const [personalData, setPersonalData] = useState({});
	const InternshipDetailsSchema = {};
	const PersonalDetailsSchema = {
		first_name: {
			width: "w-1/2",
			className: "w-full align-self-center",
			placeholder: "First Name",
			value: personalData.first_name,
			defaultValue: profileData.first_name,
			onChange: (e) =>
				setPersonalData({ ...personalData, first_name: e.target.value }),
			type: "text",
			required: true,
		},
		last_name: {
			width: "w-1/2",
			className: "w-full align-self-center",
			placeholder: "Last Name",
			value: personalData.last_name,
			defaultValue: profileData.last_name,
			onChange: (e) =>
				setPersonalData({ ...personalData, last_name: e.target.value }),
			type: "text",
			required: true,
		},
		address: {
			width: "w-full",
			className: "w-full align-self-center",
			placeholder: "Address",
			value: personalData.address,
			defaultValue: profileData.address,
			onChange: (e) =>
				setPersonalData({ ...personalData, address: e.target.value }),
			type: "text",
			required: true,
		},
		contactNoPrimary: {
			width: "w-1/2",
			className: "w-full align-self-center",
			placeholder: "Contact",
			value: personalData.contactNoPrimary,
			defaultValue: profileData.contactNoPrimary,
			onChange: (e) =>
				setPersonalData({ ...personalData, contactNoPrimary: e.target.value }),
			type: "text",
			required: true,
		},
		stream: {
			width: "w-1/2",
			className: "w-full align-self-center",
			placeholder: "Stream",
			value: personalData.stream,
			defaultValue: profileData.stream,
			onChange: (e) =>
				setPersonalData({ ...personalData, stream: e.target.value }),
			type: "text",
			required: true,
		},
		section: {
			width: "w-1/2",
			className: "w-full align-self-center",
			placeholder: "Section",
			value: personalData.section,
			defaultValue: profileData.section,
			onChange: (e) =>
				setPersonalData({ ...personalData, section: e.target.value }),
			type: "text",
			required: true,
		},
		company: {
			width: "w-1/2",
			className: "w-full align-self-center",
			placeholder: "Company",
			value: personalData.company,
			defaultValue: profileData.company,
			onChange: (e) =>
				setPersonalData({ ...personalData, company: e.target.value }),
			type: "text",
			required: true,
		},
		position: {
			width: "w-1/2",
			className: "w-full align-self-center",
			placeholder: "Position",
			value: personalData.position,
			defaultValue: profileData.position,
			onChange: (e) =>
				setPersonalData({ ...personalData, position: e.target.value }),
			type: "text",
			required: true,
		},
		mentor: {
			width: "w-1/2",
			className: "w-full align-self-center",
			placeholder: "Mentor",
			value: personalData.mentor,
			defaultValue: profileData.mentor,
			onChange: (e) =>
				setPersonalData({ ...personalData, mentor: e.target.value }),
			type: "text",
			required: true,
		},
		button: {
			text: "Update",
			type: "button",
			appearance: "filled",
			size: "md",
			color: "primary",
			className: "",
		},
	};

	useEffect(() => {
		if (!!profileData) setPersonalData(profileData);
	}, [profileData]);

	const handlePersonalDetailsSubmit = async (e) => {
		e.preventDefault();
		hide(false);
		const res = await updateProfile(personalData);
		console.log("UPDATE RESPONSE", res);
		setPersonalData({});
	};

	return (
		<Modal
			visible={visible}
			hide={hide}
			height='h-auto'
			className='overflow-auto px-8 py-4'
		>
			{type === "personal" ? (
				<FormGenerator
					formHeading='Update Personal Details'
					formSchema={PersonalDetailsSchema}
					onSubmit={(e) => handlePersonalDetailsSubmit(e)}
				/>
			) : (
				<FormGenerator
					formSchema={InternshipDetailsSchema}
					onSubmit={() => console.log("internshipData", personalData)}
				/>
			)}
		</Modal>
	);
}
