<div id="revue-embed">
	<form
		action="http://newsletter.svelteweekly.com/add_subscriber"
		method="post"
		id="revue-form"
		name="revue-form"
		target="_blank"
	>
		<div class="revue-form-group">
			<label for="member_email">Email address</label>
			<input
				class="revue-form-field w-full rounded-md border-gray-500 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
				placeholder="Your email address..."
				type="email"
				name="member[email]"
				id="member_email"
			/>
		</div>
		<div class="revue-form-group">
			<label for="member_first_name">First name <span class="optional">(Optional)</span></label>
			<input
				class="revue-form-field"
				placeholder="First name... (Optional)"
				type="text"
				name="member[first_name]"
				id="member_first_name"
			/>
		</div>
		<div class="revue-form-group">
			<label for="member_last_name">Last name <span class="optional">(Optional)</span></label>
			<input
				class="revue-form-field"
				placeholder="Last name... (Optional)"
				type="text"
				name="member[last_name]"
				id="member_last_name"
			/>
		</div>
		<div class="revue-form-actions">
			<input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
		</div>
		<div class="revue-form-footer">
			By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms"
				>Terms of Service</a
			>
			and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.
		</div>
	</form>
</div>
