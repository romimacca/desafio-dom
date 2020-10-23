// header
function header(){
    var div = document.createElement('div');
    div.className = "py-5 text-center";
        var img = document.createElement('img');
            img.className = "d-block mx-auto mb-4";
            img.src = "https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg";
            img.width = 72;
            img.height = 72;

        var h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode("Checkout form"));

        var p = document.createElement('p');
            p.className = "lead";
            p.appendChild(document.createTextNode("Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."));

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p); 
    return div;
}
// Footer
function footer_li(link){
    var li = document.createElement('li');
        li.className = "list-inline-item";

        var a = document.createElement('a');
            a.href = "#"
        a.appendChild(document.createTextNode(link));

    li.appendChild(a);
    return li;
}
function footer(){
    var footer = document.createElement('footer');
        footer.className = "my-5 pt-5 text-muted text-center text-small";

        var p = document.createElement('p');
            p.className = "mb-1";
            p.appendChild(document.createTextNode("© 2017-2019 Company Name"));

        var ul = document.createElement('ul');
            ul.className = "list-inline";
            ul.appendChild(footer_li("Privacy"));
            ul.appendChild(footer_li("Terms"));
            ul.appendChild(footer_li("Support"));

    footer.appendChild(p);
    footer.appendChild(ul);

    return footer;
}

function item_cart(name, description, value, promo=false){
    var li = document.createElement('li')
        if(promo){
            li.className = "list-group-item d-flex justify-content-between bg-light";
        }else{
            li.className = "list-group-item d-flex justify-content-between lh-condensed";
        }
            var content_div = document.createElement('div');
                if(promo){
                    content_div.className = "text-success";
                }
                var h6 = document.createElement('h6');
                    h6.className = "my-0";
                    h6.appendChild(document.createTextNode(name));

                var small = document.createElement('small');
                    if(promo){
                        small.className = "text-success";
                    }else{
                        small.className = "text-muted";
                    }
                    small.appendChild(document.createTextNode(description));

            content_div.appendChild(h6)
            content_div.appendChild(small)

            var amount = document.createElement('span');
                if(promo){
                    amount.className = "text-success";
                }else{
                    amount.className = "text-muted";
                }
            amount.appendChild(document.createTextNode(value));

    li.appendChild(content_div)
    li.appendChild(amount)

    return li;
}

// Your Cart
function cart(){
    var col = document.createElement('div');
        col.className = "col-md-4 order-md-2 mb-4";
        var h4 = document.createElement('h4');
            h4.className = "d-flex justify-content-between align-items-center mb-3";

                var text = document.createElement('span')
                    text.className = "text-muted";
                text.appendChild(document.createTextNode("Your cart"));

                var bagde = document.createElement('span')
                    bagde.className = "badge badge-secondary badge-pill";
                bagde.appendChild(document.createTextNode("3"));

        h4.appendChild(text);
        h4.appendChild(bagde);

        var ul = document.createElement('ul');
            ul.className = "list-group mb-3";
            ul.appendChild(item_cart("Product name", "Brief description", "$12"));  
            ul.appendChild(item_cart("Second product", "Brief description", "$8"));  
            ul.appendChild(item_cart("Third item", "Brief description", "$5")); 
            ul.appendChild(item_cart("Promo code", "EXAMPLECODE", "-$5", true));

            var total = document.createElement('li');
                total.className = "list-group-item d-flex justify-content-between";
                    var span = document.createElement('span');
                        span.appendChild(document.createTextNode("Total (USD)"));
                    var strong = document.createElement('strong');
                        strong.appendChild(document.createTextNode("$20"));
            total.appendChild(span)  
            total.appendChild(strong) 
        ul.appendChild(total)            
                
        var form = document.createElement('form');
            form.className = "card p-2";
                var box_input = document.createElement('div');
                    box_input.className = "input-group";
                    
                    var input = document.createElement('input');
                        input.type = "text";
                        input.placeholder = "Promo code";
                        input.className = "form-control";

                    var box_btn = document.createElement('div');
                        box_btn.className = "input-group-append";

                        var button = document.createElement('button');
                            button.type = "submit"
                            button.className = "btn btn-secondary"
                        button.appendChild(document.createTextNode("Redeem"));

                    box_btn.appendChild(button);

                box_input.appendChild(input);
                box_input.appendChild(box_btn);
            
        form.appendChild(box_input);
        
    col.appendChild(h4);
    col.appendChild(ul);
    col.appendChild(form);    
    return col;
}

// input group
function group_form_input(){
    var group_form_input = document.createElement('div');
        group_form_input.className = "mb-3";

        var label = document.createElement('label');
            label.for = "username";
            label.appendChild(document.createTextNode("Username"));
        var div_group = document.createElement('div');
            div_group.className = "input-group";

            var icon = document.createElement('div');
                icon.className = "input-group-prepend";
                var i = document.createElement('span');
                    i.className = "input-group-text";
                    i.appendChild(document.createTextNode("@"));
            icon.appendChild(i);

        var input = document.createElement('input');
            input.type = "text";
            input.required = true;
            input.placeholder = "Username";
            input.id = "username"
            input.className = "form-control"

    div_group.appendChild(icon);
    div_group.appendChild(input);
    
    var feedback = document.createElement('div');
        feedback.className = "invalid-feedback";
        feedback.appendChild(document.createTextNode( "Your username is required."));

    
    group_form_input.appendChild(label);
    group_form_input.appendChild(div_group);
    group_form_input.appendChild(feedback);
    return group_form_input;
}

// inputs form
function element_form_input(classes, text, type, id, required=false, message, placeholder, value){
    var element_form_input = document.createElement('div')
        element_form_input.className = classes;
        element_form_input.id = id;
        var label = document.createElement('label');
            label.for = id;
            
            if(required){
                label.appendChild(document.createTextNode(text));
            }else{
                label.appendChild(document.createTextNode(text));
                var optional = document.createElement('span')
                    optional.className = "text-muted";
                    optional.appendChild(document.createTextNode(" (Optional)"));
                label.appendChild(optional);  
            }
        var input = document.createElement('input');
            input.type = type;
            input.id = id;
            if(placeholder){
                input.placeholder = placeholder;
            }
            if(value){
                input.value = value;
            }
            if(required){
                input.required = true;
            }
            input.className = "form-control";
        var feedback = document.createElement('div');
            feedback.className = "invalid-feedback";
            feedback.appendChild(document.createTextNode( message));

    element_form_input.appendChild(label);
    element_form_input.appendChild(input);
    element_form_input.appendChild(feedback);

    return element_form_input;
}

function element_checkbox(classes, text, type, id){
    var element_checkbox = document.createElement('div')
        element_checkbox.className = classes;

        var label = document.createElement('label');
            label.className = "custom-control-label";
            label.htmlFor = id;
            label.appendChild(document.createTextNode(text));
        
            var input = document.createElement('input');
                input.type = type;
                input.id = id;
                input.checked = "true";
                input.className = "custom-control-input";

    element_checkbox.appendChild(label);
    element_checkbox.appendChild(input);
    return element_checkbox;
}

function option_select(o){
    var option = document.createElement('option');
        option.value = o;
        option.appendChild(document.createTextNode(o));
    return option;
}

function select_form(classes, text, id, option){
    var col = document.createElement('div');
        col.className = classes ;
        var label = document.createElement('label');
            label.htmlFor = id;
            label.appendChild(document.createTextNode(text));
        var select = document.createElement('select');
            select.className = "custom-select d-block w-100";
            select.id = id;
            var choose = document.createElement('option');
                choose.appendChild(document.createTextNode("Choose..."));


        select.appendChild(choose);
        select.appendChild(option_select(option));

    col.appendChild(label);
    col.appendChild(select);
    return col;
}
function line(){
    var line = document.createElement("hr");
        line.className = "mb-4";
    return line;
}

// Form
function form(){
    var col = document.createElement('div');
        col.className = "col-md-8 order-md-1";
            var h4 = document.createElement('h4');
                h4.className = "mb-3";
                h4.appendChild(document.createTextNode("Billing address"));

            var formulario = document.createElement('form');
                formulario.className = "needs-validation";
                    var row = document.createElement('div');
                        row.className = "row";
                        
                        // element_form_input(classes, text, type, id, required=false, message, placeholder, value)
                        row.appendChild(element_form_input("col-md-6 mb-3", "First name", "text", "firstName", true , "Valid first name is required."));
                        row.appendChild(element_form_input("col-md-6 mb-3", "Last name", "text", "lastName", true, "Valid last name is required." )); 
                        
                        
                    formulario.appendChild(row);
                    formulario.appendChild(group_form_input());

                    formulario.appendChild(element_form_input("mb-3", "Email", "email", "email", false, "Please enter a valid email address for shipping updates.", "you@example.com" ));
                    formulario.appendChild(element_form_input("mb-3", "Address", "text", "address", true, "Please enter your shipping address.", "1234 Main St" ));
                    formulario.appendChild(element_form_input("mb-3", "Address 2", "text", "address2", false, " " , "Apartment or suite" ));

                    var row_2 = document.createElement('div');
                        row_2.className = "row";
                        
                        // select_form(col, text, id, option)
                        row_2.appendChild(select_form("col-md-5 mb-3", "Country", "country", "Chile"));
                        row_2.appendChild(select_form("col-md-4 mb-3", "State", "satete", "Metropolitana"));
                        row_2.appendChild(element_form_input("col-md-3 mb-3", "Zip", "text", "zip", true));
                    formulario.appendChild(row_2);
                    formulario.appendChild(line());
                    formulario.appendChild(element_checkbox("custom-control custom-checkbox", "Shipping address is the same as my billing address", "checkbox", "same-address"   ));
                    formulario.appendChild(element_checkbox("custom-control custom-checkbox", "Save this information for next time", "checkbox", "save-info"   ));

                    formulario.appendChild(line());

                    var d_block = document.createElement('div');
                        d_block.className = "d-block my-3";
                        d_block.appendChild(element_checkbox("custom-control custom-radio", "Credit card", "radio", "credit"   ));
                        d_block.appendChild(element_checkbox("custom-control custom-radio", "Debit card", "radio", "debito"   ));
                        d_block.appendChild(element_checkbox("custom-control custom-radio", "PayPal", "radio", "paypal"   ));    
                    formulario.appendChild(d_block);

                    var row_3 = document.createElement('div');
                        row_3.className = "row";

                        row_3.appendChild(element_form_input("col-md-6 mb-3", "Name on card", "text", "cc-name", true, "Name on card is required" ));
                

                        row_3.appendChild(element_form_input("col-md-6 mb-3", "Credit card number", "text", "cc-number", true, "Credit card number is required" ));
                    formulario.appendChild(row_3);

                    var row_4 = document.createElement('div');
                        row_4.className = "row";

                    row_4.appendChild(element_form_input("col-md-3 mb-3", "Expiration", "text", "cc-expiration", true , "Expiration date required"));
                    row_4.appendChild(element_form_input("col-md-3 mb-3", "CVV", "text", "cc-cvv", true, "Security code required" ));
                    formulario.appendChild(row_4);

                    formulario.appendChild(line());
                    var button = document.createElement('button');
                        button.type = "submit"
                        button.className = "btn btn-primary btn-lg btn-block";
                        button.appendChild(document.createTextNode("Continue to checkout"));
                    formulario.appendChild(button);

    

    col.appendChild(h4);
    col.appendChild(formulario);
    return col;
}

// body
var body = document.getElementsByTagName('body')[0];
    body.className = "bg-light";

    // Container
    var container = document.createElement('div');
        container.className = "container";
        container.appendChild(header());

        var row = document.createElement('div');
            row.className = "row";
            
        // cart
        row.appendChild(cart());
        row.appendChild(form());

    container.appendChild(row);
    container.appendChild(footer());

body.appendChild(container);
    

// Help text
var ccname = document.getElementById('cc-name');
    var help_text = document.createElement('small');
        help_text.className = "text-muted";
        help_text.appendChild(document.createTextNode("Full name as displayed on card"));
ccname.appendChild(help_text);
