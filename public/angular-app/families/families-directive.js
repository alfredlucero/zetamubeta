angular.module('zmbApp').directive('familiesVisualizations', familiesVisualizations);

function familiesVisualizations() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'angular-app/families/families-directive.html',
		controller: FamiliesController,
		controllerAs: 'vm',
		access: {
			restricted: false
		},
		scope: {
			familyTree: '='
		},
		link: link
	};

	function link(scope, el, attr) {
		scope.$watchCollection('familyTree', function(newValue, oldValue) {
      if (newValue){
      	// Set familyTree data to newly updated value
      	var familyTree = newValue;
   
		    var margin = { top: 50, right: 20, bottom: 20, left: 20 },
		        width = 2000 - margin.right - margin.left,
		        height = 2000 - margin.top - margin.bottom;
		    var i = 0,duration = 750,root;
		    var tree = d3.layout.tree()
		        .size([height, width]);

		    var diagonal = d3.svg.diagonal()
		        .projection(function (d) { return [d.x, d.y]; });

		    // Remove the old family tree if present
		   	d3.select('.family-tree').remove();
		    var svg = d3.select(el[0])
		    		.append('svg')
		    		.attr("class", "family-tree")
		        .attr("width", width + margin.right + margin.left)
		        .attr("height", height + margin.top + margin.bottom)
		        .append("g")
		        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		    // Toggle children on click.
		    function click(d) {
		        if (d.children) {
		            d._children = d.children;
		            d.children = null;
		        }
		        else {
		            d.children = d._children;
		            d._children = null;
		        }
		        update(d);
		    }

		    root = familyTree;
		    root.x0 = 0;
		    root.y0 = 0;
		    update(root);

		    //d3.select(self.frameElement).style("height", "2000px");

    		function update(source) {
	        // Compute the new tree layout.
	        var nodes = tree.nodes(root).reverse(),
	        links = tree.links(nodes);

	        // Normalize for fixed-depth.
	        nodes.forEach(function (d) { d.y = d.depth * 100; });

	        // Update the nodes
	        var node = svg.selectAll("g.node")
	            .data(nodes, function (d) { return d.id || (d.id = ++i); });

	        // Enter any new nodes at the parent's previous position.
	        var nodeEnter = node.enter().append("g")
	            .attr("class", "node")
	        .attr("transform", function (d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
	        .on("click", click);

	        nodeEnter.append("circle")
	        .attr("r", 1e-6)
	        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

	        nodeEnter.append("text")
	            .attr("y", function (d) { return d.children || d._children ? -20 : 20; })
	            .attr("dy", ".35em")
	            .attr("text-anchor", "middle")
	            .text(function (d) { return d.name.split(' ')[0]; })
	            .style('fill', function(d) { return d.type === "brother" ? '#595959'	: '#466846'; })
	            .style("fill-opacity", 1e-6);

	        // Transition nodes to their new position.
	        var nodeUpdate = node.transition()
	            .duration(duration)
	            .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

	        nodeUpdate.select("circle")
	            .attr("r", 10)
	            .style("fill", function (d) {
	              	if (d._children) {
	                    return "lightsteelblue";
	                }
	                else {
	                    return "#fff";
	                }
	            })
	            .style("stroke", function (d) { return d.type === "brother" ? '#595959'	: '#466846'; });

	        nodeUpdate.select("text")
	            .style("fill-opacity", 1);

	        // Transition exiting nodes to the parent's new position.
	        var nodeExit = node.exit().transition()
	            .duration(duration)
	            .attr("transform", function (d) { return "translate(" + source.x + "," + source.y + ")"; })
	            .remove();

	        nodeExit.select("circle")
	            .attr("r", 1e-6);

	        nodeExit.select("text")
	            .style("fill-opacity", 1e-6);

	        // Update the links
	        var link = svg.selectAll("path.link")
	            .data(links, function (d) { return d.target.id; });

	        // Enter any new links at the parent's previous position.
	        link.enter().insert("path", "g")
	            .attr("class", "link")
	            .attr("d", function (d) {
	                var o = { x: source.x0, y: source.y0 };
	                return diagonal({ source: o, target: o });
	            });

	        // Transition links to their new position.
	        link.transition()
	            .duration(duration)
	            .attr("d", diagonal)
	            .style("stroke", function (d) { return d.target.type === "brother" ? '#cee0ce' : '#ddd'; });

	        // Transition exiting nodes to the parent's new position.
	        link.exit().transition()
	            .duration(duration)
	            .attr("d", function (d) {
	                var o = { x: source.x, y: source.y };
	                return diagonal({ source: o, target: o });
	            })
	            .remove();

	        // Stash the old positions for transition.
	        nodes.forEach(function (d) {
	            d.x0 = d.x;
	            d.y0 = d.y;
	        });
    		}
      }
    });
	}
}
