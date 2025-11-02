---
{"publish":true,"created":"2025-11-01T03:52:34.727-07:00","modified":"2025-11-01T20:49:44.476-07:00","tags":["lab"],"cssclasses":"","socialImage":"[[THUMBNAIL.31f901e94837eb37271c.png]]"}
---

# Introduction

Welcome to Maya! The purpose of this guide is to just give you a basic overview of what you're looking at when you open Maya. Consider this a guided tour through Maya's user interface, but feel free to experiment with any buttons/functions that look interesting to you.
# Getting Maya

While UCBUGG does provide lab computers with Maya installed, it's really important to have your own copy on your computer so that you can work from home on your own schedule. This process will require that you have a valid berkeley.edu email address so that you are able to download Autodesk Maya for free!
## Registering with Autodesk

Open up a web browser and go to to this link

<div data-auto-card-link-depth="-1" class="auto-card-link-container"><a href="https://www.autodesk.com/education/edu-software/overview" class="auto-card-link-card external-link"><div class="auto-card-link-main"><div class="auto-card-link-title">Autodesk Student Access to Education Downloads</div><div class="auto-card-link-description">Explore free Autodesk software for students, educators, and educational institutions. Download your favorite Autodesk software, including AutoCAD, Revit, Fusion, and more.</div><div class="auto-card-link-host"><span>www.autodesk.com</span></div></div></a></div>

![[attachments/getting_maya.f9442584d956a1af4d1c.png]]

If you don't have an account with Autodesk already you will need to make one in order to download the software. Click 'Get Started'. This link will take you to a registration page. Make sure to fill out the "Email" field with your berkeley.edu email address or this process will not work. Once you have filled out the form, hit "Submit." You will need a student ID or some other way to validate your identity as a student for this.

Autodesk will register your account and send you an activation email. Registration can take a few minutes, so don't worry if the email doesn't show up instantly. Once you get your email, click on the included activation link.
## Downloading Maya

Once registration is complete, go back here, log in with your newly created account, and fill out the second section

<div data-auto-card-link-depth="-1" class="auto-card-link-container"><a href="http://students.autodesk.com/education/free-software/maya" class="auto-card-link-card external-link"><div class="auto-card-link-main"><div class="auto-card-link-title">Autodesk Student and Educator Software Resources | Autodesk Education</div><div class="auto-card-link-description">Learn how Autodesk empowers students &amp; educators with training, curricula, professional development, and formal certifications for all ages and skill levels.</div><div class="auto-card-link-host"><span>students.autodesk.com</span></div></div></a></div>

![[attachments/getting_maya_select2022.0c33bc215a5164fd761d.png]]

> [!danger]
> The version number will change depending on the year. **Always** check with the facilitators each semester what version to install. As of Fall 2025, we are using **Maya 2024**. Note that this is different than the image provided

Select the correct version for the semester in the **version drop-down menu**.

Select "English" from the language drop-down. From the operating system drop-down menu, select which version you want to download. Once you select your version, click the "INSTALL" button. Or, if you want an installer that work offline, use the dropdown and choose "DOWNLOAD" instead. The download should start automatically. Maya is a pretty big piece of software (3.0+ GB) so make sure you have enough time and space to download the entire program.
## Installing Maya

Once your download is complete, simply run the installer and follow the on screen instructions. The installer will give you the option to sign into your Autodesk account to activate the product. As of Fall 2020, Autodesk is no longer allowing educational accounts to activate by serial number. After you sign in, Maya will resume its installation. You are now the proud owner of Maya!

> [!note]
> In the installer, it might ask you to install other various plugins for Maya. These are not necessary, but if you want to explore Maya more in depth, the Bifrost and Substance plugins are helpful 
## Mudbox

While you're at it, you can download Mudbox using the account you have now created as well. Mudbox is not required for our class, but you may find it very useful and we have resources if you want to learn how to use it as well.

Now let’s get on to using Maya.
# Basic UI Teminology

## Viewport

The light gray area highlighted by the red rectangle is called the **viewport:**

![[attachments/viewport.ce750dd07a1aac71944a.jpg]]

The viewport is a representation of what's in your scene. Almost everything in your scene will be viewed in the viewport. Here you can manipulate objects, animate characters, and even make cool effects like fire, water, and shattering objects.

The gray plane in the middle of the viewport is referred to as the grid. This grid is meant to orient you to your position. It will not be visible in the final video you produce.
## Shelf

![[attachments/shelf.da6ba3e61838d05d6538.png]]

Note that everything in the shelf can be accessed from the top bar of your window screen; the shelf is just an easy way to quickly access some of the tools like making specific polygons, adding lights, rigging joints, etc.
## Toolbox

This is the toolbox (there are shortcuts for its functions discussed below).

![[attachments/toolbox.44138b75d51443ab0b33.png]]

This contains the tools you need to manipulate basic attributes of objects (position, angle, size, etc.) through the move, rotate, and scale/resize tools.
## Dropdown Menu

![[attachments/dropdown_menu.0145dbeeca304582b7c4.png]]

This changes the function of Maya to a different part of the pipeline. When it's in "modeling", most options in the topmost bar of your screen will be related to modeling. When it's "rigging" the options will be relevant to rigging, etc. This should give you an idea of how huge Maya's scope of capabilities is.
# Creating Objects

This part of the guide will take a brief look at how to make a polygon and edit its basic attributes.

1. Make sure your dropdown menu is in Modeling mode
2. Go to create → polygon primitives → sphere
   ![[attachments/create_sphere.aed549b5faa87c0e996d.png]]
   A sphere will show up in the middle of your viewport.
	1. You can also do this through the polygons menu in the shelf:
	   ![[attachments/sphere_shelf.1bc1e8e18ba46359e7ba.png]]
3. If you want to undo the creation of the sphere, do <kbd>&#9096; Ctrl</kbd> <kbd>Z</kbd> (<kbd>&#9096; Ctrl</kbd> <kbd>&#8679; Shift</kbd> <kbd>Z</kbd> will redo)
4. Check the attribute editor for the sphere:
	1. To access the attribute editor, hold right click on the sphere and let go of right click when the mouse hovers over "pSphere1..."
	   ![[attachments/access_attribute_editor.5ec12fa0879542ee076f.png]]
	2. You should then get this window on the right side of the screen:
	   ![[attachments/attribute_editor_1.db59a6481e96033bce48.png]]
	3. Try clicking on the first tab on the left "pSphere1." There you will find several spaces with numbers where you can edit the attributes and you would see a corresponding change.
	   ![[attachments/attribute_editor_2.defad7143df643715a6c.png]]
	4. Notice how there's three boxes for every attribute: this is because there's three dimensions to every attribute (x, y, z). So if you edit those numbers, you should see the sphere changing in the viewport in a way that corresponds to the numbers you put. Feel free to explore changing numbers and seeing the effect on the sphere, or to change the sphere directly and see the effect on the numbers.
	5. Another important function of the Attribute Editor is to allow you to change certain attributes or settings of the polygons you create. Click on "polySphere1" in the Attribute Editor; you will see certain attributes such as radius and subdivisions which can be easily changed to your needs. Different polygon primitives will have various attributes that you can change and experiment with.
	   ![[attachments/attribute_editor_3.5c234e37b440cc89e293.png]]
# Manipulating Views

So now that you have an object, what if you want to take a look around the object? Here are some valuable functions that will help you move around the viewport with ease: (NOTE: many of these functions require the use of a computer mouse which is highly recommended if you are taking UCBUGG)

- <kbd>&#9095; Alt</kbd> <kbd>Left 🖱️</kbd> will rotate the viewport, allowing you the freedom to look in all angles
- <kbd>&#9095; Alt</kbd> <kbd>Right 🖱️</kbd> or <kbd>Wheel 🖱️</kbd> will zoom the viewport in/out
- <kbd>&#9095; Alt</kbd> <kbd>Middle 🖱️</kbd> (clicking on the actual mouse wheel and holding) will pan around the scene
- If the camera moves too far away/is too zoomed in or out, click on an object in your scene and press <kbd>F</kbd> while hovering over the viewport. This will focus the camera on that object, centering it in the middle of the viewport so that you are reoriented once again.
## Display Options for the Viewport

If you look in the area below the shelf, there should be a sequence of icons:

![[attachments/icons_below_shelf.2ce9b77e5bdddd1031cb.png]]

For now, we'll focus on these buttons:

![[attachments/wireframe_options_png.992596222c3f65996d1c.png]]

- Try clicking on these icons in order and watch what it does to the sphere/polygon you've created before.
- The wireframe is useful if you the object is complicated and you want to trace its edges better.
- The shaded is the default view.
- The wireframe on shaded is also helpful if you want to see the edges of an unselected object, and if you want to see a clear relationship between the edges of an object and its surface.

## Smoothing and Unsmoothing

Select your polygon and press <kbd>3</kbd> and notice how the object becomes smoother. This is most pronounced in objects with hard edges/corners, such as a cube. Here it is normally:

![[attachments/unsmoothed.e05ac3d563431fef4323.png]]

And here it is after selecting it and pressing <kbd>3</kbd> to smooth it:

![[attachments/smoothed.e260d26095617bad94a2.png]]

Notice how it almost looks like a different object? We'll get into this in the modeling section in a lot more detail. For now, just know that <kbd>3</kbd> will smooth an object and <kbd>1</kbd> will unsmooth it again.
# Manipulating Objects

Remember the toolbox on the left side of the screen? You can use it to manipulate your objects:

![[attachments/all_tools.31f901e94837eb37271c.png]]

The hotkeys for these (very simple but very useful to remember):
- <kbd>Q</kbd>: **Selection Mode**
	- Generally this is used when you want to select something but not have the manipulation arrows onscreen.
- <kbd>W</kbd>: **Move Tool**
	- Use the arrows to move the object in whichever direction you like. Clicking and dragging in the middle where all three arrows intersect will cause the object to move in all 3 dimensions.
- <kbd>E</kbd>: **Rotate Tool**
	- Use the axis lines to rotate the object in whichever direction you like. Clicking between the lines will rotate the object in all 3 dimensions.
- <kbd>R</kbd>: **Scale Tool**
	- Use the cube ends of the lines to resize the object in specific dimensions, or click and drag in the intersection point in the middle to resize the whole object in all three dimensions at once.
- <kbd>&#9096; Ctrl</kbd> <kbd>D</kbd>: **Duplicate**
	- Click on the polygon you made and press <kbd>&#9096; Ctrl</kbd> <kbd>D</kbd> and the object will be duplicated at exactly the same point as the original object (which means it will be difficult to see). Now click <kbd>W</kbd> and move the duplicate out of the way so that you can see the two objects.

- What if you want to select both objects at once?
	- There's two ways: Select the first object and then <kbd>&#8679; Shift</kbd> <kbd>Left 🖱️</kbd> the second object and both will be selected **or** <kbd>Left 🖱️</kbd> + <kbd>Drag</kbd> a box around both objects and they'll both be selected
- What if you want to objects to become just one object?
	- Select both objects and go to <kbd>Mesh</kbd> → <kbd>Combine</kbd>
	  ![[attachments/combine.eec2e2be66ff273d5407.png]]

> [!caution]
> Be careful with this though, since you will **NOT** be able to select the separate objects again until you separate them manually. They are now considered one object. (An alternate way to combine objects is parenting, but that's in the modeling section).

- What if you have a ton of objects in your scene and it's difficult to keep track of everything?
	- Maya has you covered. Go to <kbd>Win</kbd> -> <kbd>Outliner</kbd> 
	  
	  ![[attachments/outliner.dbbc0dc89738e08c831e.png]]
	- This will then open a window that will show the default names of the objects in your scene, which isn't very useful if you have many objects. To remedy this, double click on one of the names of the objects listed in your outliner, and rename it something more appropriate (i.e. `ball_1`).
- What if you want to delete an object?
	- Just click the object and press <kbd>&#9003; Delete</kbd> or <kbd>&#10229; Backspace</kbd>. Again, if you'd like to undo, do <kbd>&#9096; Ctrl</kbd> <kbd>Z</kbd>.
	- Alternatively, you can click on the object's name in the list in the outliner and just press <kbd>&#9003; Delete</kbd> or <kbd>&#10229; Backspace</kbd>.
# Different Views of the Scene

Since we are dealing with objects in three dimensions displayed on a 2d screen, it can be difficult to get a sense of depth of the objects you're making in the scene. Therefore, it is important to be cycling through different views to make sure everything in the scene is exactly where you want it.

Maya has plenty of options for this.

If you press the spacebar, your viewport will be split into four like this:

![[attachments/four_views.3f21e19df482e574a280.png]]

If you look at the bottom of each one of the views (boxed in red) you can see the label for what view it is.

Something important to keep in mind: everything but the `persp` view is in 2D, meaning that you can't rotate/tumble these views the same you rotate in the `persp` view because they're flat. This is absolutely essential when you're modeling something based off of a reference, and your `side` view and `front` view have to be in proportion.

Hover your mouse over one of the views and press spacebar. That should make that window take over the viewport.

If you want to get out of that view, press spacebar again and you'll be back to the four screens. Hover over `persp` and press spacebar to go back to the default 3d view.
# Altering Parts of and Object

1. Make a polygon (sphere, cube, pipe, etc.)
2. Hold right click over it and you should see this:

![[attachments/vertex_face_etc.300a92b0d3f71e71bea1.png]]

The main buttons to pay attention to for now are <kbd>Vertex</kbd>, <kbd>Edge</kbd>, <kbd>Face</kbd> and <kbd>Object Mode</kbd>.

- If you let go of right click over <kbd>Vertex</kbd> the lines of the object will turn blue, indicating that you're editing parts of the object. The intersection dots in the object's lines will now be purple, allowing you to change their positions.
- Try clicking a vertex and then pressing <kbd>W</kbd> to go into the move tool and move them in/out to get a sense of what vertices contribute to the shape of the object.
- In <kbd>Edge</kbd> mode you'll be able to alter the lines on an object (an edge is the line between two vertices)
- In <kbd>Face</kbd> mode you'll be able to alter the spaces between the lines on the object (faces are the areas of the mesh surrounded by four vertices/edges).
- To go back to being able to manipulate the object as a whole, go into <kbd>Object Mode</kbd>. Now the lines will be green, indicating that the object as a whole is being altered and not just specific parts of it.
## A Tiny Bit of Modeling

For the purpose of your application assignment (making a robot), here's a little bit of modeling tools to help you.

From what you've seen in the previous section, it seems that the lines on an object dictate its shape—so how do you add lines/edges?

1. Select the object.
2. Go to <kbd>Mesh Tools</kbd> → <kbd>Insert Edge Loop</kbd>

![[attachments/edgeloop.c8862c98a7431a2cc1a0.png]]

Now click on one of the edges of the polygon, and you'll find that a line has formed throughout the object perpendicular to the edge you selected. You have now added an edge loop. On a sphere this isn't very helpful, but in other situations, it is absolutely essential to be able to get your model where it needs to be.

![[attachments/edgeloop_2.ea23f401c191452ff4b5.png]]

What if you want to bring out a face without pulling the surrounding faces with it? So if you go into <kbd>Face</kbd> mode and just select a face and move it outward, it will look something like this:

![[attachments/pull_face.f946e73545d45a09ad7d.png]]

Notice how the surrounding faces get affected when you pull that one face out? What if you don't want them to be affected? The answer to that is the **extrude tool.**

Select the face, and instead of pulling it out immediately, go to edit <kbd>Mesh</kbd> -> <kbd>Extrude</kbd> and if you pull out the face, it will look like this:

![[attachments/extrude_face.2295e2d3ac3ce86fbd37.png]]

Do you see the difference? The extrude tool is very helpful in connecting objects/extracting shapes from them. For example, as you work on your robot, if it has a torso that needs arms you can take the faces on the sides (the ones that are small enough to be arms) and extrude them out instead of making the arms simple pipes/cylinders.

The danger with this though is extruding twice. Be careful to only extrude once per movement. So extrude → move → extrude → move, but it should never be extrude → extrude → move. That would cause double faces on top of each other, which would mess up the smoothing of the model.

Let us know if you have any questions! Feel free to explore!

<style>.auto-card-link-container{background-color:transparent;container-type:inline-size;position:relative;overflow:hidden;user-select:none;--auto-card-link-button-width:calc(var(--icon-size, 18px) + var(--size-2-3, 6px));--auto-card-link-indent-size:2.5em}&[data-auto-card-link-depth="1"]{margin-left:calc(var(--auto-card-link-indent-size) * 1)}&[data-auto-card-link-depth="2"]{margin-left:calc(var(--auto-card-link-indent-size) * 2)}&[data-auto-card-link-depth="3"]{margin-left:calc(var(--auto-card-link-indent-size) * 3)}&[data-auto-card-link-depth="4"]{margin-left:calc(var(--auto-card-link-indent-size) * 4)}&[data-auto-card-link-depth="5"]{margin-left:calc(var(--auto-card-link-indent-size) * 5)}&[data-auto-card-link-depth="6"]{margin-left:calc(var(--auto-card-link-indent-size) * 6)}&[data-auto-card-link-depth="7"]{margin-left:calc(var(--auto-card-link-indent-size) * 7)}.auto-card-link-title{white-space:normal!important;--lh:1.5em;line-height:var(--lh);height:calc(var(--lh) * 3);overflow:hidden;text-overflow:ellipsis}.auto-card-link-card{display:flex;flex-direction:row-reverse;height:8em;transition:20ms ease-in;cursor:pointer;text-decoration:none;color:var(--link-external-color,var(--highlight));background:var(--background-primary-alt,var(--darkgray));border:solid var(--border-width) var(--divider-color,var(--lightgray));border-radius:var(--radius-s,4px)}.auto-card-link-main{display:flex;flex-grow:1;flex-direction:column;justify-content:space-between;gap:.18em;padding:.5em .6em;overflow:hidden;text-align:left}.auto-card-link-description{overflow:hidden;--lh:1.4em;line-height:var(--lh);height:calc(var(--lh) * 3);color:var(--text-muted,var(--darkgray));font-size:var(--font-smallest, .9em)}.auto-card-link-host{font-size:var(--font-smallest, .9em);display:flex;flex-direction:row;align-items:center;text-overflow:ellipsis;white-space:nowrap}&:hover{color:var(--link-external-color-hover,var(--tertiary))}.auto-card-link-thumbnail{margin:0;width:unset!important;border-radius:var(--radius-s,4px) 0 0 var(--radius-s,4px)!important;height:100%;object-fit:cover;max-width:50%!important;pointer-events:none}.auto-card-link-container svg.external-icon{display: none}</style>
