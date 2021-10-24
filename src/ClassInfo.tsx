import TodoInterface from "./TodoInterface"
import Box from '@material-ui/core/Box';
import { ListFormat } from "typescript";

const ClassInfo: React.FC<{ post : any }> = ({ post }) => {

    const numberConversion = (rating: number) => {
        let color = "#c4def6";
        if (rating <= 1) {
            color = "#eb9694";
        } else if (rating <= 2) {
            color = "#fad0c3";
        } else if (rating <= 3) {
            color = "#fcdc00";
        } else if (rating <= 4) {
            color = "#c1e1c5"; 
        }
        return color; 
    }

    const professorOrdering = (post: any) => {
        let text : String = ""; 
        if (post.hasOwnProperty("professors")) {
            console.log("LENGTH " + post.professors.length); 
            for (let i = 0; i < post.professors.length; i++) {
                console.log("prof " + post.professors[i]);  
                text = text.concat(i + ". " + post.professors[i] + " ");
            }
            return <div><h4 style={{ color: "black" }}><b>Professor Rankings: </b> {text}</h4></div>
        }
        // return text; 
    }

    return (
        <div>
            <div style={{ marginLeft: '30%', marginTop: '60px', width: '40%', outline: '5px outset yellow' }}>
            <Box color="white" bgcolor="#282c34" p={1}>
                <h1>{post.class_name}</h1>
            </Box>
            </div>

            <div style={{ marginLeft: '35%', marginTop: '20px', width: '30%', outline: '5px groove blue'}}>
            <Box color="black" bgcolor={numberConversion(post.quality_rating)} p={1}>
                Quality Rating: {post.quality_rating}
            </Box>
            <Box color="black" bgcolor={numberConversion(post.difficulty_rating)} p={1}>
                Difficulty Rating: {post.difficulty_rating}
            </Box>
            <Box color="black" bgcolor={numberConversion(post.sentiment * 7)} p={1}>
                Sentiment: {post.sentiment}
            </Box>
            </div>

            {professorOrdering(post)}

            <p style = {{color: "black"}}><b>Top Positive Comment:</b> {post.positive_comment}</p>
            <p style = {{color: "black"}}><b>Top Negative Comment:</b> {post.negative_comment}</p>            

            <hr className="rounded"/>
        </div>
    );
}
export default ClassInfo; 