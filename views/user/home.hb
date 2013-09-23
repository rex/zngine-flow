<h2>Title: {{title}}/{{subtitle}}</h2>
<h4>Test text: {{user.test}}</h4>

{{#with data.proof}}
	<ul>
		<li>Ajax: {{#if isAjax}} AJAX Request!{{else}} Not an AJAX request!{{/if}}</li>
		<li>Protocol: {{protocol}}</li>
		<li>Path: {{path}}</li>
		<li>IP: {{ip}}</li>
		<li>OriginalUrl: {{originalUrl}}</li>
		<li>Time: {{time}}</li>
	</ul>
{{/with}}

{{#unless data.proof}}
	Can't prove this is a real server request :(
{{/unless}}