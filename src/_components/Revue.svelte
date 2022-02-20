<script>
	import Input from '$elements/html/Input.svelte';
	import InputSubmit from '$elements/html/InputSubmit.svelte';
</script>

<div class="mx-auto max-w-sm md:max-w-lg">
	<div id="revue-embed">
		<form
			action="http://newsletter.svelteweekly.com/add_subscriber"
			method="post"
			id="revue-form"
			name="revue-form"
			target="_blank"
		>
			<div class="flex flex-col space-y-6">
				<div class="space-y-2">
					<label for="member_email">Email address</label>
					<div class="relative">
						<span
							class="absolute top-0 left-0 block h-2 w-2 -translate-x-4 -translate-y-6 transform rounded-full bg-red-400"
						/>
					</div>
					<Input
						placeholder="hello@svelteweekly.com"
						type="email"
						name="member[email]"
						id="member_email"
					/>
				</div>

				<div class="flex space-x-6">
					<div class="space-y-2">
						<label for="member_first_name"
							>First name <span class="optional">(Optional)</span></label
						>
						<Input
							placeholder="First name..."
							type="text"
							name="member[first_name]"
							id="member_first_name"
						/>
					</div>

					<div class="space-y-2">
						<label for="member_last_name">Last name <span>(Optional)</span></label>
						<Input
							placeholder="Last name..."
							type="text"
							name="member[last_name]"
							id="member_last_name"
						/>
					</div>
				</div>

				<div>
					<InputSubmit value="Subscribe" name="member[subscribe]" id="member_submit" />
				</div>

				<p>
					By subscribing, you agree with Revue's <a
						target="_blank"
						href="https://www.getrevue.co/terms">Terms of Service</a
					>
					and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.
				</p>
			</div>
		</form>
	</div>
</div>
