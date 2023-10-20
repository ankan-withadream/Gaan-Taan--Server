import {Connect_server, mega_storage} from "./src/services/server.js";
import { Initialize_app, app } from "./src/services/app.js";
import { Combine_all_routes } from "./src/features/main/router.js";

Initialize_app();
Connect_server();
Combine_all_routes(app);

app.get('/', async (req, res) => {
  console.log("routed /");
  // res.send("You are routing to root /").status(200);
  // need to map to a controller async func that will return something, after getting the value send response from here.
  res.send("response to /");
  // sendResponse();
})



app.listen(3000, () => console.log('Server started on port 3000'));