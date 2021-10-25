// virtual dom is a giant object basically
// 8:18
// so exapmple is like
// 8:18
// this
// 8:18
const state = { subject: "some name" };
const element = `<html>
    <div>
        <div id="header">
            <h1>Hello, {{state.subject}}!</h1>
            <p>How are you today?</p>
        </div>
    </div>
</html>`;
// 8:18
// is regular
// 8:19
// this is Virtual DOM
// 8:19
{
  tag: "div",
    (children = [
      {
        tag: "div",
        attributes: {
          id: "header",
        },
        children: [
          {
            tag: "h1",
            children: "Hello, World!",
          },
          {
            tag: "p",
            children: "How are you today?",
          },
        ],
      },
    ]);
}
// 8:19
// so when u tell JS to be like go find me a p tag header
// 8:19
// its gonna have to search
// 8:19
// where an object u kidna know where everythign is by reference
// 8:19
// well u and i dont know but react does
// 8:20
// so it acesses that much faster
