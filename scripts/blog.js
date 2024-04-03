import {
  openButton,
  closeButton,
  openMenu as openMenuFunction,
  closeMenu as closeMenuFunction,
} from "./menu.js";

const main = document.querySelector("body > main");
const mainTitle = document.querySelector("main > header > div > h1");
const mainQuote = document.querySelector(
  "main > header > div > p:nth-of-type(1)"
);

let articles = document.querySelectorAll("article");
let articlesText = document.querySelectorAll("article > div > p");

const posts = [
  {
    title: "FastAI - Chapter 4",
    date: "02/04/2024",
    info: `<p>This chapter was truly insightful as I learned the magic spells that make a neural network work. At first, it was a bit theoretical, highlighting the similarities between PyTorch and NumPy in terms of functionality and API.
    However, it also pointed out PyTorch's limitations, such as the lack of GPU support and gradient calculations crucial for deep learning tasks. Consequently, PyTorch tensors are recommended over NumPy. Furthermore, a key takeaway is the
    importance of mastering the tensor API of PyTorch, which are fundamental for various machine learning operations.</p>
    <p>I then moved on to learn the steps involved in turning a function into a machine learning classifier, with a focus on the stochastic gradient descent (SGD) optimization algorithm:</p>
    <p style="padding-left:4rem; text-indent: 0;">1. Initializing weights.</p>
    <p style="padding-left:4rem; text-indent: 0;">2. Making predictions based on these weights.</p>
    <p style="padding-left:4rem; text-indent: 0;">3. Evaluating model performance (loss).</p>
    <p style="padding-left:4rem; text-indent: 0;">4. Calculating gradients to understand weight adjustments' impact on loss.</p>
    <p style="padding-left:4rem; text-indent: 0;">5. Updating weights accordingly.</p>
    <p style="padding-left:4rem; text-indent: 0;">6. Iterating through these steps until convergence is achieved.</p>
    <p>
    After that i was introduced to even more concepts essential for understanding deep learning. While there isn't enough time to talk about each one extensively, here's a brief overview:
    </p>
    <p style="padding-left:4rem; text-indent: 0;">● ReLU: Function that returns 0 for negative numbers and doesn't change positive numbers. Really important to add nonlinearity to neural networks.</p>
    <p style="padding-left:4rem; text-indent: 0;">● Mini-batch: is a subset of the training dataset that is used to update the parameters of a neural network during the training process. Instead of processing the entire dataset (epoch) at once,
    training is performed on smaller groups of data, referred to as mini-batches.</p>
    <p style="padding-left:4rem; text-indent: 0;">● Forward pass: is a fundamental step in the training and inference processes of a neural network model. During the forward pass, the model takes input data and propagates it forward through its layers,
    ultimately producing predictions or outputs.</p>
    <p style="padding-left:4rem; text-indent: 0;">● Loss: A value that represents how well (or badly) our model is doing. Really important as the primary goal of training a machine learning model is to minimize the loss function.</p>
    <p style="padding-left:4rem; text-indent: 0;">● Gradient: The derivative of the loss with respect to some parameter of the model. As it provides information on the rate of change of the loss concerning the parameter's value, it indicates whether
    adjustments to the parameter will improve or worsen the model's performance.</p>
    <p style="padding-left:4rem; text-indent: 0;">● Backward pass: Computing the gradients of the loss with respect to all model parameters.</p>
    <p style="padding-left:4rem; text-indent: 0;">● Gradient descent: Taking a step in the directions opposite to the gradients to make the model parameters a little bit better.</p>
    <p style="padding-left:4rem; text-indent: 0;">● Learning rate: The size of the step we take when applying SGD to update the parameters of the model.</p>
    <p>
    With this knowledge, I was challenged to create my first model (finally some practice yay!), which at first was a bit overwhelming. Nevertheless, it was a smooth experience; I had some problems, but nothing that a bit of Googling couldn’t solve.
    It’s a bit disappointing when you understand the inner workings of all neural networks because when you don’t understand it, it feels like magic, but in reality, it's a bunch of functions with undefined parameters, and the goal is to just change
    those parameters in order to minimize the loss function. How do we know how to change those parameters? The gradient, aka the derivative of the loss function, will tell you. It truly amazes me how simple a neural network is; as I said, though, it
    was magic, and my goal with this course was to become a wizard ( soo disappointing :p ).
    </p>
    <p>
    Jokes aside, this chapter was really interesting; it was a breakthrough in this learning journey. I opened the black box and delved under the hood to see and understand the engine of the neural network, which I think lays a solid foundation for
    further exploration and experimentation. Okay, bye, see ya!
    </p>`,
  },
  {
    title: "FastAI - Chapter 1 & 2",
    date: "24/03/2024",
    info: `<p>This week I decided to start my ML/AI learning journey. After much consideration, I decided to resume the fastai course. After completing the first two chapters, I'm feeling really confident for two reasons:</p>
    <p style="padding-left:4rem; text-indent: 0;">1. The course has a top-down structure, which, for someone like me who prefers to learn by doing, is a big plus. Contrary to conventional learning, it feels natural and not burdensome. Reading the book chapters doesn't
    feel like a chore; it doesn't seem useless, as if I'm just reading to pass an exam. At the end of each lesson/chapter, I'm certain that I've acquired a new skill, which keeps the curious ones hooked.</p>
    <p style="padding-left:4rem; text-indent: 0;">2. The first chapter served as an introduction to the course, helping me realize that the world of artificial intelligence and machine learning isn't reserved for only the best and brightest mathematicians or computer
    scientists, nor do you need enormous amounts of data or the best hardware on the planet to train a model. These are all misconceptions. You can do it yourself with little coding knowledge on your own computer! 
    You probably don't believe me, but I'm serious. For example, in the second lesson, you're taught how to create your first AI web app, where I thought, "Wow, this is really easy" (I know it will get harder and more complex,
    but I like to lie to myself, lol).</p> 
    <p>
    The course has been great so far. I've realized that deep learning isn't as code-intensive as I thought; it's more like 90% data cleaning. As the pros say, "trash in, trash out" lol. So 
    you don't need loads of data; you need GOOD data, and that, my friends, is the hard part! There are other problems you face when training a model, such as overfitting or when the data used in your model is in a feedback
    loop (I'm sure there are other problems, but this is all I remember/learned so far). Using the example from the book about a feedback loop: when you have a model that uses police arrests to predict where crimes will occur, 
    what happens is that there will be more policing in those areas, resulting in more arrests, and then that data will be fed back into the model, perpetuating the cycle. This leads to more and more arrests in that specific area,
    making the model biased over time. It's a problem we need to be aware of.</p>
    <p>And that's it. If you've read it all the way to the end, you probably don’t have anything better to do, or maybe my writing skills aren't as bad as I
    initially thought. Anyway, I hope this was helpful for you and serves as a catalyst for you to start your learning journey in whatever field you choose. Don’t take my word as that of a specialist; I'm pretty sure I've said a
    lot of nonsense, but it is what it is. I'm learning, and I just want to document my journey. So yeah, as an engineer who spends most of his day looking at a screen inside an office, I really need to go sunbathe. See ya!</p>`,
  },
];

const headerAppear = () => {
  mainTitle.classList.remove("opacity-disappear");
  mainQuote.classList.remove("side-slide-disappear");

  mainTitle.offsetWidth;
  mainQuote.offsetWidth;

  mainTitle.classList.add("opacity-appear");
  mainQuote.classList.add("side-slide-appear");
};

const headerDisappear = () => {
  mainTitle.classList.remove("opacity-appear");
  mainQuote.classList.remove("side-slide-appear");

  mainTitle.offsetWidth;
  mainQuote.offsetWidth;

  mainTitle.classList.add("opacity-disappear");
  mainQuote.classList.add("side-slide-disappear");
};

const articlesAppear = () => {
  articles.forEach((article) => {
    article.style.setProperty("--animation-delay", `${0.2}s`);
    article.classList.remove("opacity-disappear");
    article.offsetWidth;
    article.classList.add("opacity-appear");
  });

  articlesText.forEach((p) => {
    p.style.setProperty("--animation-delay", `${0.2}s`);
    p.classList.remove("slide-disappear");
    p.offsetWidth;
    p.classList.add("slide-appear");
  });
};

const articlesDisappear = () => {
  articles.forEach((article) => {
    article.style.setProperty("--animation-delay", `${0.1}s`);
    article.classList.remove("opacity-appear");
    article.offsetWidth;
    article.classList.add("opacity-disappear");
  });

  articlesText.forEach((p) => {
    p.style.setProperty("--animation-delay", `${0}s`);
    p.classList.remove("slide-appear");
    p.offsetWidth;
    p.classList.add("slide-disappear");
  });
};

const openMain = () => {
  headerAppear();
  articlesAppear();
};

const closeMain = () => {
  articlesDisappear();

  setTimeout(() => {
    headerDisappear();
  }, 200);
};

const openMenu = () => {
  closeMain();

  openMenuFunction();
};

const closeMenu = () => {
  openMain();

  closeMenuFunction();
};

openButton.addEventListener("click", () => {
  openMenu();
});

closeButton.addEventListener("click", () => {
  closeMenu();
});

const createPostElement = (post) => {
  const article = document.createElement("article");
  article.innerHTML = `
    <header>
        <h2>${post.title}</h2>
        <p>${post.date}</p>
    </header>
    <div>
        <p>${post.info}</p>
    </div>
  `;
  return article;
};

const renderPosts = () => {
  posts.forEach((post) => {
    const postElement = createPostElement(post);
    main.appendChild(postElement);
  });

  articles = document.querySelectorAll("article");
  articlesText = document.querySelectorAll("article > div > p");
};

const headerName = document.getElementById("header-name");

headerName.addEventListener("click", () => {
  closeMenu();
  closeMain();
  setTimeout(() => {
    window.location.href = "/index";
  }, 310);
});

document.addEventListener("DOMContentLoaded", () => {
  renderPosts();
  openMain();
});
