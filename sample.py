# Source: https://github.com/llSourcell/tensorflow_image_classifier
def get_stripe_customers(apikey):
    # TODO: This is a mock. Implement real connection with stripe api.
    customers = []
    for i in range(3):
        customer = {
            "email": "a@b.c"
        }
        customers.append(customer)
    return customers


def check_unique_customers(customer_dict):
    # logica

    # source: https://stackoverflow.com/questions/65545997/python3-stripe-api-to-get-all-customer-email
    for customer in customer_dict:
        print(customer['email'])


customers = get_stripe_customers("SAMPLE_STRIPE_API_KEY")
check_unique_customers(customers)




