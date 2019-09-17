class Blog extends Component{
	render(){
		const posts1 = this.props.posts;
		//console.log(posts)

		const sidebar = (
			<ul>
				{posts1.map((post) => {
					//Must use return to avoid this error.
          return(
						<li key={post.id}>
							{post.title} - {post.content}
						</li>
					)
				})
			}
			
			</ul>
		);

		const maincontent = this.props.posts.map((post) => {
			return(
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.content}</p>
				</div>
			)
		})
		return(
			<div>{sidebar}<hr/>{maincontent}</div>
		);
	}
}
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);