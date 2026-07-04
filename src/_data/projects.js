// Project showcase data, recovered from the old Jekyll site.
// Descriptions contain inline HTML (links, line breaks) and are rendered as-is.
export default [
  {
    title: "ACM Conference: Electric Vehicle V2G",
    img: "VPP-op-size-round.png",
    date: "May 2023",
    category: "Graduate Research",
    tech: "Python, Cvxpy, Pandas",
    description: `This project, <a href="https://dl.acm.org/doi/abs/10.1145/3575813.3597353">published in ACM's e-Energy conference 2023 available here</a>, explores the concept of vehicle-to-grid (V2G) technology. V2G technology allows electric vehicles (EVs) to serve as battery packs, enabling users to sell stored excess battery back to the grid when energy demand peaks. <br><br> The project presents a unique approach to incentivize private EV owners to participate in V2G using contract theory from economics, thus creating a Virtual Power Plant (VPP) by aggregating numerous batteries. The project also simulates results over a year's worth of data on EV charging sessions and electricity market prices, revealing a profitability increase of over 12% compared to the baseline. <br><br> <a href="https://drive.google.com/file/d/1FgZRD49wRbq_AUNv-xCl8HerWVCT-9Nq/view?usp=sharing">Video of the conference talk</a> · <a href="https://webdocs.cs.ualberta.ca/~oardakan/files/V2GContracts-eEnergy23.pdf">PDF</a> · <a href="https://github.com/sustainable-computing/VPP-Contracts">Code</a>`,
  },
  {
    title: "Detecting Attacks on Federated Learning",
    img: "Federated-Learning-sized-round.png",
    date: "December 2022",
    category: "Graduate Project (3 members)",
    tech: "Python, PyTorch, Flower (FL Framework)",
    description: `Federated learning (FL) is a machine learning technique that facilitates joint training of a model without sharing local data. FL addresses privacy, security, access rights, and heterogeneous data issues. While this privacy-preserving technique has become increasingly popular, its distributed nature exposes new threats from malicious participants. <br><br> In this project, I created heterogeneous datasets based on Fashion-MNIST, replicated and tested various attack detection techniques, and ran experiments that trained a Federated Convolutional Neural Network. Other team members contributed by implementing the attacks, implementing the models and configuring the GPU servers.`,
  },
  {
    title: "Robot Arm & Visual Control",
    img: "Robot-sized-round.png",
    date: "December 2021",
    category: "Graduate Project (6 members)",
    tech: "ROS, Python, RGBD Camera, Vision Trackers",
    description: `A robot manipulator (WAM by Barrett Advance Robotics) is controlled in an Uncalibrated Visual Servoing scheme where an RGBD Camera tracks the location of the end effector and the location of a target position. <br><br> My task consisted in designing a trajectory that connected the end effector to the final point with a smooth line in 3D space. That line was segmented into waypoints which were transmitted via ROS Publisher/Subscriber Nodes to the robot's control software. The controller only used visual feedback provided by the camera.`,
  },
  {
    title: "Geotracking Alerts for Delivery Trucks",
    img: "visits2-round-size.png",
    date: "May 2021",
    category: "Data Scientist at Intelimetrica",
    tech: "PySpark, Python, Azure Databricks, MS SQL Server, Folium, Geopandas",
    description: `As a component of a large multinational beverage company's operations monitoring platform, this project analyzed the GPS coordinates of their delivery vehicles. The GPS system posted the coordinates at regular intervals, allowing us to generate alerts whenever a vehicle visited a client, exceeded its visit time, entered a prohibited geofence, and other similar events. <br><br> The project was deployed in Azure Databricks, and I was responsible for designing the code that identified each alert.`,
  },
  {
    title: "IEEE Conference: Leader-follower",
    img: "Mobile-size-round.png",
    date: "August 2019",
    category: "Undergraduate Publication",
    tech: "Heterogeneous Robots, Computer Vision, Mbed Microcontroller, Open MV Camera, C, Python, Matlab, Vicon Motion Capture System",
    description: `<a href="https://ieeexplore.ieee.org/abstract/document/8885046">This project was accepted to IEEE's MWSCAS 2019</a>. It consists of a motion coordination technique for an omnidirectional and a differential-drive robot. <br><br> The strategy forms the follower robot relative to the leader robot using a local vision system for distance and heading angle measurement. The leader robot follows a desired trajectory in the plane while using a consensus approach to converge with the follower's angle. To evaluate the control strategy's effectiveness, we conducted experiments using two industrial-focused robots and a motion capture system.`,
  },
  {
    title: "Tracked Mobile Robot",
    img: "orubot-size-round.png",
    date: "December 2018",
    category: "Undergraduate Project (4 members)",
    tech: "Laser cutting, CAD (Inventor), Bluetooth, GPS, Mbed Microcontroller, C, Control Theory",
    description: `This tracked robot has custom-designed mechanical, electrical, and control components. The robot has a differential configuration, featuring two DC motors equipped with encoders for providing precise feedback. <br><br> The body is constructed using laser-cut acrylic material and fitted with ready-made tracks. The robot can be remotely controlled using a mobile application, or it can navigate to a specific location autonomously via GPS. The control mechanisms utilize PID for manual control and state feedback for autonomous navigation.`,
  },
];
