import { Button, Card, TextInput, Title } from "@tremor/react";

export function CreateNewUser() {
	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form className=''>
				<TextInput placeholder='User Name' />
				<TextInput placeholder='User Email' />
				<TextInput placeholder='GitHub UserName ' />

				<div>
					<Button type='submit' style={{ marginTop: "16px" }}>
						Create User
					</Button>
				</div>
			</form>
		</Card>
	);
}
