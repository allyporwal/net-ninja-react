import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('https://8000-violet-coral-jquvvvki.ws-eu11.gitpod.io/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
      { isPending && <div>Loading...</div> }
    </div>
  );
}

export default Home;