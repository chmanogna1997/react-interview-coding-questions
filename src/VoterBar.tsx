import { useEffect, useState } from "react";
const voters = [
  {
    id: "v001",
    name: "Ava Johnson",
    votes: 124,
  },
  {
    id: "v002",
    name: "Liam Smith",
    votes: 98,
  },
  {
    id: "v003",
    name: "Emma Davis",
    votes: 156,
  },
  {
    id: "v004",
    name: "Noah Wilson",
    votes: 73,
  },
  {
    id: "v005",
    name: "Sophia Brown",
    votes: 211,
  },
  {
    id: "v006",
    name: "Mason Taylor",
    votes: 145,
  },
  {
    id: "v007",
    name: "Olivia Anderson",
    votes: 187,
  },
  {
    id: "v008",
    name: "Ethan Thomas",
    votes: 62,
  },
  {
    id: "v009",
    name: "Isabella Moore",
    votes: 132,
  },
  {
    id: "v010",
    name: "James Martin",
    votes: 91,
  },
];


// Voter leaderboard showing top 3 candidates with progress bars and full list with voting
function VoterBar() {
  const [data, setData] = useState(voters);

  // Sort candidates by votes (descending) on mount
  useEffect(() => {
    setData((prev) => [...prev].sort((a, b) => b.votes - a.votes));
  }, []);

  // Increment votes for a candidate and re-sort the leaderboard
  function AddVotes(id: any) {
    setData((prev) =>
      prev
        .map((ele) =>
          ele.id === id ? { ...ele, votes: ele.votes + 1 } : ele
        )
        .sort((a, b) => b.votes - a.votes)
    );
  }

  return(
    <div>
      <h1>Show Voters info</h1>
      <div>
        <h1> Top 3 bar </h1>
        <ul>
          {data && data.map((ele, index) => {
            if(index < 3 ){
            let bar_indication = {
              height : '100%',
              width: Math.floor(ele.votes/7) + '%',
              background : 'white'
            }
            return(
              <li style={{display:'flex', gap : '3rem', margin : "1rem"}}  key = {ele.id} >
                  <p> {ele.name} </p>
                  <div style={{width:'24rem', height:'2rem', background:'red' }}>
                    <div style= {bar_indication}></div>
                  </div>
              </li>
             
            )
          }
          })}
        </ul>
      </div>
      <ul>
        {data && data.map((ele) => {
          return(
            <li key={ele.id} style={{display:'grid', gap:'5rem', margin:'1rem', gridAutoFlow:'column', justifyContent:'center'}}>
              <p>{ele.name}</p>
              <p> {ele.votes} </p>
              <button onClick={() => AddVotes(ele.id)}>Add</button>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default VoterBar